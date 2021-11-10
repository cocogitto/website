import type {Plugin} from '@vuepress/core'
import hljs from 'highlight.js/lib/core';
import toml from 'highlight.js/lib/languages/ini';
import markdown from 'highlight.js/lib/languages/markdown';
import bash from './bash_with_coco';
import conventionalCommit from './conventional_commit_spec';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('conventional', conventionalCommit);
hljs.registerLanguage('toml', toml);
hljs.registerLanguage('markdown', markdown);

export const highlightjsPlugin: Plugin<{}> = () => ({
    name: '@vuepress/plugin-highlightjs',
    async extendsMarkdown(md) {
        md.options.highlight = (code, lang) => {
            if (lang == "text") {
                return code;
            } else {
                return hljs.highlight(code, {language: lang, ignoreIllegals: true}).value
            }
        }
    },
})