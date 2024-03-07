<template>
  <div class="editor">
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">
        <b-button
            size="sm"
            v-for="button in buttons"
            :key="button.label"
            variant="outline-primary"
            class="menubar__button"
            :class="{ 'is-active': isActive[button.command]()} "
            @click="commands[button.command](...button.args)"
        >
          {{ button.label }}
        </b-button>
      </div>
    </editor-menu-bar>
    <editor-content class="editor__content bordered" :editor="editor" />
  </div>
</template>


<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  props: ['value'],
  data() {
    return {
      editor: new Editor({
        content: this.value,
        onUpdate: ({ getHTML }) => {
          this.$emit('input', getHTML()); // Emitting an event with the updated content
        },
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
        ],
      }),
      buttons: [
        { label: 'Bold', command: 'bold', args: [] },
        { label: 'Italic', command: 'italic', args: [] },
        { label: 'Strike', command: 'strike', args: [] },
        { label: 'Underline', command: 'underline', args: [] },
        { label: 'Code', command: 'code', args: [] },
        { label: 'Paragraph', command: 'paragraph', args: [] },
        { label: 'Heading 1', command: 'heading', args: [{ level: 1 }] },
        { label: 'Heading 2', command: 'heading', args: [{ level: 2 }] },
        { label: 'Heading 3', command: 'heading', args: [{ level: 3 }] },
        { label: 'Bullet List', command: 'bullet_list', args: [] },
        { label: 'Ordered List', command: 'ordered_list', args: [] },
        { label: 'Blockquote', command: 'blockquote', args: [] },
        { label: 'Code Block', command: 'code_block', args: [] },
        { label: 'Horizontal Rule', command: 'horizontal_rule', args: [] },
      ],
    }
  },
  watch: {
    value(newValue) {
      if (newValue !== this.editor.getHTML()) { // Check to prevent infinite loop
        this.editor.setContent(newValue);
      }
    }
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="css" scoped>
.menubar{
  display: flex;
  gap: 8px 16px;
  flex-wrap: wrap;
}

.editor__content >>> .ProseMirror {
  margin-top: 10px;
  min-height: 100px; /* Adjust as necessary */
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 10px;
}
</style>
