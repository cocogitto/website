import{r as n,o as i,c,a as e,b as l,w as a,F as p,e as t,d as s}from"./app.500b9ae0.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},d=t('<h1 id="configuration-reference" tabindex="-1"><a class="header-anchor" href="#configuration-reference" aria-hidden="true">#</a> Configuration reference</h1><p>The config reference list all value that can be set in the <code>cog.toml</code> file at the root of a repository.</p><h2 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h2><h3 id="tag-prefix" tabindex="-1"><a class="header-anchor" href="#tag-prefix" aria-hidden="true">#</a> <code>tag_prefix</code></h3>',4),h=t(`<li><p>Type: <code>String</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: set a tag prefix value for cocogitto. For instance if you have a <code>v</code> as a tag prefix, cocogitto will generate version starting with <code>v</code> and commands like <code>cog changelog</code> will pick only those versions.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">tag_prefix</span> = <span class="hljs-string">&quot;v&quot;</span>
</code></pre></div></li>`,4),g=e("p",null,"Also see:",-1),m=s("User guide -> Tag prefix"),_=e("h3",{id:"branch-whitelist",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#branch-whitelist","aria-hidden":"true"},"#"),s(),e("code",null,"branch_whitelist")],-1),f=t(`<li><p>Type: <code>Array&lt;String&gt;</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: A list of glob patterns to allow bumping only on matching branches.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">branch_whitelist</span> = [ <span class="hljs-string">&quot;main&quot;</span>, <span class="hljs-string">&quot;release/**&quot;</span> ]
</code></pre></div></li>`,4),b=e("p",null,"Also see:",-1),q=s("User guide -> Branch whitelist"),j=e("h3",{id:"ignore-merge-commits",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ignore-merge-commits","aria-hidden":"true"},"#"),s(),e("code",null,"ignore_merge_commits")],-1),k=t(`<li><p>Type: <code>boolean</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Description: whether to ignore or to lint merge commits.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">ignore_merge_commits</span> = <span class="hljs-literal">true</span>
</code></pre></div></li>`,5),x=e("p",null,"Also see:",-1),v=s("User guide -> Deal with merge commit"),y=e("h2",{id:"commit-types",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commit-types","aria-hidden":"true"},"#"),s(" Commit Types")],-1),D=t(`<li><p>Type: <code>Hashmap&lt;String, CommitType&gt;</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: extend the allowed commit types, creating a new <code>cog commit</code> command and allowing to generate changelog entries for the given type. Can also be used to override the default commit types.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[commit_types]</span>
<span class="hljs-attr">hotfix</span> = { changelog_title = <span class="hljs-string">&quot;Hotfixes&quot;</span> }
<span class="hljs-attr">chore</span> = { changelog_title = <span class="hljs-string">&quot;Hotfixes&quot;</span>, omit_from_changelog = <span class="hljs-literal">true</span> }
<span class="hljs-attr">release</span> = { changelog_title = <span class="hljs-string">&quot;Releases&quot;</span> }
</code></pre></div></li>`,4),U=e("p",null,"Also see:",-1),w=s("User guide -> Custom commit types"),A=t(`<h3 id="changelog-title" tabindex="-1"><a class="header-anchor" href="#changelog-title" aria-hidden="true">#</a> <code>changelog_title</code></h3><ul><li>Type: <code>String</code></li><li>Optional: <code>false</code></li><li>Description: change the changelog title for the given commit type.</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[commit_types]</span>
<span class="hljs-attr">chore</span> = { changelog_title = <span class="hljs-string">&quot;Misc&quot;</span> }
<span class="hljs-attr">hotfix</span> = { changelog_title = <span class="hljs-string">&quot;Hot fix&quot;</span> }
</code></pre></div></li></ul><h3 id="omit-from-changelog" tabindex="-1"><a class="header-anchor" href="#omit-from-changelog" aria-hidden="true">#</a> <code>omit_from_changelog</code></h3><ul><li>Type: <code>Bool</code></li><li>Optional: <code>true</code></li><li>Default value: <code>false</code></li><li>Description: do not generate changelog entries for the given commit type.</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[commit_types]</span>
<span class="hljs-attr">chore</span> = { changelog_title = <span class="hljs-string">&quot;Chore&quot;</span>, omit_from_changelog = <span class="hljs-literal">true</span> }
</code></pre></div></li></ul><h2 id="bump-config" tabindex="-1"><a class="header-anchor" href="#bump-config" aria-hidden="true">#</a> Bump config</h2><h3 id="pre-bump-hooks" tabindex="-1"><a class="header-anchor" href="#pre-bump-hooks" aria-hidden="true">#</a> <code>pre_bump_hooks</code></h3>`,6),T=t(`<li><p>Type: <code>Array&lt;String&gt;</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: an array of command to execute before a version bump.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
    <span class="hljs-string">&quot;sh -c \\&quot;./ci/check_branch.sh\\&quot;&quot;</span>,
    <span class="hljs-string">&quot;cargo test -- --test-threads 1&quot;</span>,
    <span class="hljs-string">&quot;cargo clippy&quot;</span>,
    <span class="hljs-string">&quot;cargo build --release&quot;</span>,
    <span class="hljs-string">&quot;cargo fmt --all&quot;</span>,
    <span class="hljs-string">&quot;cargo bump {{version}}&quot;</span>,
]
</code></pre></div></li>`,4),E=e("p",null,"Also see:",-1),O=s("User guide -> Automatic Versioning"),S=s("User guide -> Pre-bump hooks"),C=s("User guide -> Version DSL"),B=e("h3",{id:"post-bump-hooks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#post-bump-hooks","aria-hidden":"true"},"#"),s(),e("code",null,"post_bump_hooks")],-1),V=t(`<li><p>Type: <code>Array&lt;String&gt;</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: an array of command to execute after a version bump.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">post_bump_hooks</span> = [
    <span class="hljs-string">&quot;git push&quot;</span>,
    <span class="hljs-string">&quot;git push origin {{version}}&quot;</span>,
    <span class="hljs-string">&quot;cargo package&quot;</span>,
    <span class="hljs-string">&quot;cargo publish&quot;</span>
]
</code></pre></div></li>`,4),L=e("p",null,"Also see:",-1),P=s("User guide -> Automatic Versioning"),H=s("User guide -> Post-bump hooks"),M=s("User guide -> Version DSL"),N=e("h3",{id:"bump-profiles",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bump-profiles","aria-hidden":"true"},"#"),s(),e("code",null,"bump_profiles")],-1),F=e("li",null,[e("p",null,[s("Type: "),e("code",null,"Hashmap<String, BumpProfile>")])],-1),G=e("li",null,[e("p",null,[s("Optional: "),e("code",null,"true")])],-1),R=s("Description: add additional "),z=s("pre-bump"),I=s(" and "),J=s("post-bump"),K=s(" hooks profile. a profile can be used with the "),Q=e("code",null,"cog bump --hook-profile <profile_name>",-1),W=s(" flag."),X=t(`<li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[bump_profiles.hotfix]</span>
<span class="hljs-attr">pre_bump_hooks</span> = [
    <span class="hljs-string">&quot;cargo build --release&quot;</span>,
    <span class="hljs-string">&quot;cargo fmt --all&quot;</span>,
    <span class="hljs-string">&quot;cargo bump {{version}}&quot;</span>,
]

<span class="hljs-attr">post_bump_hooks</span> = [
    <span class="hljs-string">&quot;cargo package&quot;</span>,
    <span class="hljs-string">&quot;cargo publish&quot;</span>
]
</code></pre></div></li>`,1),Y=e("p",null,"Also see:",-1),Z=s("User guide -> Automatic Versioning"),$=s("User guide -> Post-bump hooks"),ee=s("User guide -> Pre-bump hooks"),se=s("User guide -> Version DSL"),oe=s("User guide -> Bump profiles"),le=e("h3",{id:"skip-ci",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#skip-ci","aria-hidden":"true"},"#"),s(),e("code",null,"skip_ci")],-1),ae=t(`<li>Type: <code>String</code></li><li>Optional: <code>true</code></li><li>Description: &quot;skip_ci&quot; string that is appended to the end of the bump commit. It can also be specified using <code>cog bump --skip-ci &lt;skip_ci_string&gt;</code></li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">skip_ci</span> = <span class="hljs-string">&quot;[skip-ci]&quot;</span>
</code></pre></div></li>`,4),te=s("Also see: "),ne=s("User guide -> Make Cocogitto skip CI CD"),ie=e("h3",{id:"skip-untracked",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#skip-untracked","aria-hidden":"true"},"#"),s(),e("code",null,"skip_untracked")],-1),ce=t(`<li>Type: <code>boolean</code></li><li>Optional: <code>true</code></li><li>Default value: <code>false</code></li><li>Description: Allows to perform bump even if there are untracked or uncommited changes.</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">skip_untracked</span> = <span class="hljs-literal">true</span>
</code></pre></div></li>`,5),pe=s("Also see: "),re=s("User guide -> Skip untracked or uncommited changes"),ue=t(`<h3 id="disable-changelog" tabindex="-1"><a class="header-anchor" href="#disable-changelog" aria-hidden="true">#</a> <code>disable_changelog</code></h3><ul><li>Type: <code>boolean</code></li><li>Optional: <code>true</code></li><li>Default value: <code>false</code></li><li>Description: Disable changelog generation when bumping.</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">disable_changelog</span> = <span class="hljs-literal">true</span>
</code></pre></div></li></ul><h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h2><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> <code>path</code></h3>`,4),de=t(`<li><p>Type: <code>String</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Default value: <code>&quot;CHANGELOG.md&quot;</code></p></li><li><p>Description: path the repository markdown changelog.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[changelog]</span>
<span class="hljs-attr">path</span> = <span class="hljs-string">&quot;my_changelog.md&quot;</span>
</code></pre></div></li>`,5),he=e("p",null,"Also see:",-1),ge=s("User guide -> Automatic Versioning"),me=s("User guide -> Changelog"),_e=e("h3",{id:"template",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#template","aria-hidden":"true"},"#"),s(),e("code",null,"template")],-1),fe=t(`<li><p>Type: <code>String</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Default value: <code>&quot;default&quot;</code></p></li><li><p>Description: name of the builtin template to use for changelog generation or path to a custom template. Note that <code>remote</code>, <code>repository</code> and <code>owner</code> are mandatory if the &quot;remote&quot; built-in template us used or if your custom template make use of those variables.</p></li><li><p>Built-in templates : <code>default</code>, <code>remote</code>, <code>full_hash</code></p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[changelog]</span>
<span class="hljs-attr">template</span> = <span class="hljs-string">&quot;full_hash&quot;</span>
</code></pre></div></li>`,6),be=e("p",null,"Also see:",-1),qe=s("User guide -> Changelog"),je=s("User guide -> Built-in templates"),ke=s("User guide -> Custom templates"),xe=e("h3",{id:"remote",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remote","aria-hidden":"true"},"#"),s(),e("code",null,"remote")],-1),ve=t(`<li><p>Type: <code>String</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: domain name of the git platform hosting the repository, used for Markdown link generation in changelogs. when provided <code>repository</code> and <code>owner</code> are also required.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[changelog]</span>
<span class="hljs-attr">template</span> = <span class="hljs-string">&quot;remote&quot;</span>
<span class="hljs-attr">remote</span> = <span class="hljs-string">&quot;github.com&quot;</span>
<span class="hljs-attr">repository</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>
<span class="hljs-attr">owner</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>
</code></pre></div></li>`,4),ye=e("p",null,"Also see:",-1),De=s("User guide -> Changelog"),Ue=s("User guide -> Built-in templates"),we=s("User guide -> Custom templates"),Ae=e("h3",{id:"repository",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#repository","aria-hidden":"true"},"#"),s(),e("code",null,"repository")],-1),Te=t(`<li><p>Type: <code>String</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: name of the repository on the remote git platform.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[changelog]</span>
<span class="hljs-attr">template</span> = <span class="hljs-string">&quot;remote&quot;</span>
<span class="hljs-attr">remote</span> = <span class="hljs-string">&quot;github.com&quot;</span>
<span class="hljs-attr">repository</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>
<span class="hljs-attr">owner</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>
</code></pre></div></li>`,4),Ee=e("p",null,"Also see:",-1),Oe=s("User guide -> Changelog"),Se=s("User guide -> Built-in templates"),Ce=s("User guide -> Custom templates"),Be=e("h3",{id:"owner",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#owner","aria-hidden":"true"},"#"),s(),e("code",null,"owner")],-1),Ve=t(`<li><p>Type: <code>String</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: owner of the repository on the remote git platform.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[changelog]</span>
<span class="hljs-attr">template</span> = <span class="hljs-string">&quot;remote&quot;</span>
<span class="hljs-attr">remote</span> = <span class="hljs-string">&quot;github.com&quot;</span>
<span class="hljs-attr">repository</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>
<span class="hljs-attr">owner</span> = <span class="hljs-string">&quot;cocogitto&quot;</span>
</code></pre></div></li>`,4),Le=e("p",null,"Also see:",-1),Pe=s("User guide -> Changelog"),He=s("User guide -> Built-in templates"),Me=s("User guide -> Custom templates"),Ne=e("h3",{id:"authors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#authors","aria-hidden":"true"},"#"),s(),e("code",null,"authors")],-1),Fe=t(`<li><p>Type: <code>Array&lt;Author&gt;</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: A list of commit authors with their git signature and git platform username to generate Markdown links in changelogs.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code>  <span class="hljs-section">[changelog]</span>
  <span class="hljs-attr">authors</span> = [
    { signature = <span class="hljs-string">&quot;Paul Delafosse&quot;</span>, username = <span class="hljs-string">&quot;oknozor&quot;</span> },
    { signature = <span class="hljs-string">&quot;Jack Dorland&quot;</span>, username = <span class="hljs-string">&quot;jackdorland&quot;</span> },
    { signature = <span class="hljs-string">&quot;Mike Lubinets&quot;</span>, username = <span class="hljs-string">&quot;mersinvald&quot;</span> },
    { signature = <span class="hljs-string">&quot;Marcin Puc&quot;</span>, username = <span class="hljs-string">&quot;tranzystorek-io&quot;</span> },
    { signature = <span class="hljs-string">&quot;Renault Fernandes&quot;</span>, username = <span class="hljs-string">&quot;renaultfernandes&quot;</span> },
    { signature = <span class="hljs-string">&quot;Pieter Joost van de Sande&quot;</span>, username = <span class="hljs-string">&quot;pjvds&quot;</span> },
    { signature = <span class="hljs-string">&quot;orhun&quot;</span>, username = <span class="hljs-string">&quot;orhun&quot;</span> },
    { signature = <span class="hljs-string">&quot;Danny Tatom&quot;</span>, username = <span class="hljs-string">&quot;its-danny&quot;</span> },
]
</code></pre></div></li>`,4),Ge=e("p",null,"Also see:",-1),Re=s("User guide -> Changelog"),ze=s("User guide -> Built-in templates"),Ie=t(`<h2 id="mono-repository-config" tabindex="-1"><a class="header-anchor" href="#mono-repository-config" aria-hidden="true">#</a> Mono-repository config</h2><h3 id="monorepo-version-separator" tabindex="-1"><a class="header-anchor" href="#monorepo-version-separator" aria-hidden="true">#</a> <code>monorepo_version_separator</code></h3><ul><li>Type: <code>String</code></li><li>Optional: <code>true</code></li><li>Description: set a package tag separator. For instance if you have a <code>-</code> as package separator, cocogitto will generate monorepo package version starting with the package name followed by the optional prefix and package version (ex: <code>my-package-v1.0.0</code>)</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">monorepo_version_separator</span> = <span class="hljs-string">&quot;-&quot;</span>
</code></pre></div></li></ul><h3 id="pre-package-bump-hooks" tabindex="-1"><a class="header-anchor" href="#pre-package-bump-hooks" aria-hidden="true">#</a> <code>pre_package_bump_hooks</code></h3><ul><li>Type: <code>Array&lt;String&gt;</code></li><li>Optional: <code>true</code></li><li>Description: an array of command executed before every package bump.</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
    <span class="hljs-string">&quot;cargo build --release&quot;</span>,
    <span class="hljs-string">&quot;cargo fmt --all&quot;</span>,
    <span class="hljs-string">&quot;cargo set-version {{version}}&quot;</span>,
]
</code></pre></div></li></ul><h3 id="post-package-bump-hooks" tabindex="-1"><a class="header-anchor" href="#post-package-bump-hooks" aria-hidden="true">#</a> <code>post_package_bump_hooks</code></h3><ul><li>Type: <code>Array&lt;String&gt;</code></li><li>Optional: <code>true</code></li><li>Description: an array of command executed after every package bump.</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
    <span class="hljs-string">&quot;cargo build --release&quot;</span>,
    <span class="hljs-string">&quot;cargo fmt --all&quot;</span>,
    <span class="hljs-string">&quot;cargo set-version {{version}}&quot;</span>,
]
</code></pre></div></li></ul><h2 id="mono-repository-packages" tabindex="-1"><a class="header-anchor" href="#mono-repository-packages" aria-hidden="true">#</a> Mono-repository packages</h2><h3 id="path-1" tabindex="-1"><a class="header-anchor" href="#path-1" aria-hidden="true">#</a> <code>path</code></h3><ul><li>Type: <code>String</code></li><li>Optional: <code>false</code></li><li>Description: set the package path.</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[packages]</span>
<span class="hljs-attr">my_package</span> = { path = <span class="hljs-string">&quot;packages/my_package&quot;</span> }
</code></pre></div></li></ul><h3 id="changelog-path" tabindex="-1"><a class="header-anchor" href="#changelog-path" aria-hidden="true">#</a> <code>changelog_path</code></h3><ul><li>Type: <code>String</code></li><li>Optional: <code>true</code></li><li>Default: <code>{path}/CHANGELOG.md</code></li><li>Description: overrides the default changelog path, allowing to set an absolute path.</li><li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[packages]</span>
<span class="hljs-attr">my_package</span> = { path = <span class="hljs-string">&quot;packages/my_package&quot;</span>, changelog_path = <span class="hljs-string">&quot;changelogs/my_package.md&quot;</span> }
</code></pre></div></li></ul><h3 id="public-api" tabindex="-1"><a class="header-anchor" href="#public-api" aria-hidden="true">#</a> <code>public_api</code></h3>`,13),Je=t(`<li><p>Type: <code>boolean</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Default: <code>true</code></p></li><li><p>Description: if set to false package will not trigger global version bump.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[packages]</span>
<span class="hljs-attr">my_package</span> = { path = <span class="hljs-string">&quot;packages/my_package&quot;</span>, public_api = <span class="hljs-literal">false</span> }
</code></pre></div></li>`,5),Ke=e("p",null,"Also see:",-1),Qe=s("User guide -> Package configuration"),We=e("h3",{id:"pre-bump-hooks-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pre-bump-hooks-1","aria-hidden":"true"},"#"),s(),e("code",null,"pre_bump_hooks")],-1),Xe=t(`<li><p>Type: <code>Array&lt;String&gt;</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: an array of command to execute before a package bump.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">pre_bump_hooks</span> = [
    <span class="hljs-string">&quot;cargo build --release&quot;</span>,
    <span class="hljs-string">&quot;cargo fmt --all&quot;</span>,
    <span class="hljs-string">&quot;cargo set-version {{version}}&quot;</span>,
]
</code></pre></div></li>`,4),Ye=e("p",null,"Also see:",-1),Ze=s("User guide -> Automatic Versioning"),$e=s("User guide -> Automatic versioning for monorepo"),es=s("User guide -> Post-bump hooks"),ss=s("User guide -> Version DSL"),os=e("h3",{id:"post-bump-hooks-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#post-bump-hooks-1","aria-hidden":"true"},"#"),s(),e("code",null,"post_bump_hooks")],-1),ls=t(`<li><p>Type: <code>Array&lt;String&gt;</code></p></li><li><p>Optional: <code>true</code></p></li><li><p>Description: an array of command to execute after a version bump.</p></li><li><p>Example:</p><div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-attr">post_bump_hooks</span> = [
    <span class="hljs-string">&quot;echo {{latest}} bumped to {{version}}&quot;</span>,
]
</code></pre></div></li>`,4),as=e("p",null,"Also see:",-1),ts=s("User guide -> Automatic Versioning"),ns=s("User guide -> Automatic versioning for monorepo"),is=s("User guide -> Post-bump hooks"),cs=s("User guide -> Version DSL"),ps=e("h3",{id:"bump-profiles-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bump-profiles-1","aria-hidden":"true"},"#"),s(),e("code",null,"bump_profiles")],-1),rs=e("li",null,[s("Type: "),e("code",null,"Hashmap<String, BumpProfile>")],-1),us=e("li",null,[s("Optional: "),e("code",null,"true")],-1),ds=s("Description: add additional per package "),hs=s("pre-bump"),gs=s(" and "),ms=s("post-bump"),_s=s(" hooks profile. a profile can be used with the "),fs=e("code",null,"cog bump --hook-profile <profile_name>",-1),bs=s(" flag."),qs=t(`<li>Example:<div class="language-toml ext-toml"><pre class="language-toml"><code><span class="hljs-section">[packages.my-package]</span>
<span class="hljs-attr">path</span> = <span class="hljs-string">&quot;packages/my-package&quot;</span>

<span class="hljs-section">[bump_profiles.hotfix]</span>
<span class="hljs-attr">pre_bump_hooks</span> = [
    <span class="hljs-string">&quot;cargo build --release&quot;</span>,
    <span class="hljs-string">&quot;cargo fmt --all&quot;</span>,
    <span class="hljs-string">&quot;cargo set-version {{version}}&quot;</span>,
]

<span class="hljs-attr">post_bump_hooks</span> = [
    <span class="hljs-string">&quot;cargo package&quot;</span>,
]
</code></pre></div></li>`,1);function js(ks,xs){const o=n("RouterLink");return i(),c(p,null,[d,e("ul",null,[h,e("li",null,[g,e("p",null,[l(o,{to:"/guide/#tag-prefix"},{default:a(()=>[m]),_:1})])])]),_,e("ul",null,[f,e("li",null,[b,e("p",null,[l(o,{to:"/guide/#branch-whitelist"},{default:a(()=>[q]),_:1})])])]),j,e("ul",null,[k,e("li",null,[x,e("p",null,[l(o,{to:"/guide/#deal-with-merge-commit"},{default:a(()=>[v]),_:1})])])]),y,e("ul",null,[D,e("li",null,[U,e("p",null,[l(o,{to:"/guide/#custom-commit-types"},{default:a(()=>[w]),_:1})])])]),A,e("ul",null,[T,e("li",null,[E,e("ul",null,[e("li",null,[l(o,{to:"/guide/#auto-bump"},{default:a(()=>[O]),_:1})]),e("li",null,[l(o,{to:"/guide/#pre-bump-hooks"},{default:a(()=>[S]),_:1})]),e("li",null,[l(o,{to:"/guide/#version-dsl"},{default:a(()=>[C]),_:1})])])])]),B,e("ul",null,[V,e("li",null,[L,e("ul",null,[e("li",null,[l(o,{to:"/guide/#auto-bump"},{default:a(()=>[P]),_:1})]),e("li",null,[l(o,{to:"/guide/#post-bump-hooks"},{default:a(()=>[H]),_:1})]),e("li",null,[l(o,{to:"/guide/#version-dsl"},{default:a(()=>[M]),_:1})])])])]),N,e("ul",null,[F,G,e("li",null,[e("p",null,[R,l(o,{to:"/config/#pre_bump_hooks"},{default:a(()=>[z]),_:1}),I,l(o,{to:"/config/#post_bump_hooks"},{default:a(()=>[J]),_:1}),K,Q,W])]),X,e("li",null,[Y,e("ul",null,[e("li",null,[l(o,{to:"/guide/#auto-bump"},{default:a(()=>[Z]),_:1})]),e("li",null,[l(o,{to:"/guide/#post-bump-hooks"},{default:a(()=>[$]),_:1})]),e("li",null,[l(o,{to:"/guide/#pre-bump-hooks"},{default:a(()=>[ee]),_:1})]),e("li",null,[l(o,{to:"/guide/#version-dsl"},{default:a(()=>[se]),_:1})]),e("li",null,[l(o,{to:"/guide/guide/#bump-profiles"},{default:a(()=>[oe]),_:1})])])])]),le,e("ul",null,[ae,e("li",null,[te,e("ul",null,[e("li",null,[l(o,{to:"/guide/#make-cocogitto-skip-ci-cd"},{default:a(()=>[ne]),_:1})])])])]),ie,e("ul",null,[ce,e("li",null,[pe,e("ul",null,[e("li",null,[l(o,{to:"/guide/#skip-untracked-or-uncommited-changes"},{default:a(()=>[re]),_:1})])])])]),ue,e("ul",null,[de,e("li",null,[he,e("ul",null,[e("li",null,[l(o,{to:"/guide/#auto-bump"},{default:a(()=>[ge]),_:1})]),e("li",null,[l(o,{to:"/guide/#changelogs"},{default:a(()=>[me]),_:1})])])])]),_e,e("ul",null,[fe,e("li",null,[be,e("ul",null,[e("li",null,[l(o,{to:"/guide/#changelogs"},{default:a(()=>[qe]),_:1})]),e("li",null,[l(o,{to:"/guide/#built-in-templates"},{default:a(()=>[je]),_:1})]),e("li",null,[l(o,{to:"/guide/#custom-templates"},{default:a(()=>[ke]),_:1})])])])]),xe,e("ul",null,[ve,e("li",null,[ye,e("ul",null,[e("li",null,[l(o,{to:"/guide/#changelogs"},{default:a(()=>[De]),_:1})]),e("li",null,[l(o,{to:"/guide/#buiLt-in-templates"},{default:a(()=>[Ue]),_:1})]),e("li",null,[l(o,{to:"/guide/#custom-templates"},{default:a(()=>[we]),_:1})])])])]),Ae,e("ul",null,[Te,e("li",null,[Ee,e("ul",null,[e("li",null,[l(o,{to:"/guide/#changelogs"},{default:a(()=>[Oe]),_:1})]),e("li",null,[l(o,{to:"/guide/#buiLt-in-templates"},{default:a(()=>[Se]),_:1})]),e("li",null,[l(o,{to:"/guide/#custom-templates"},{default:a(()=>[Ce]),_:1})])])])]),Be,e("ul",null,[Ve,e("li",null,[Le,e("ul",null,[e("li",null,[l(o,{to:"/guide/#changelogs"},{default:a(()=>[Pe]),_:1})]),e("li",null,[l(o,{to:"/guide/#buiLt-in-templates"},{default:a(()=>[He]),_:1})]),e("li",null,[l(o,{to:"/guide/#custom-templates"},{default:a(()=>[Me]),_:1})])])])]),Ne,e("ul",null,[Fe,e("li",null,[Ge,e("ul",null,[e("li",null,[l(o,{to:"/guide/#changelogs"},{default:a(()=>[Re]),_:1})]),e("li",null,[l(o,{to:"/guide/#buiLt-in-templates"},{default:a(()=>[ze]),_:1})])])])]),Ie,e("ul",null,[Je,e("li",null,[Ke,e("p",null,[l(o,{to:"/guide/#packages-configuration"},{default:a(()=>[Qe]),_:1})])])]),We,e("ul",null,[Xe,e("li",null,[Ye,e("ul",null,[e("li",null,[l(o,{to:"/guide/#auto-bump"},{default:a(()=>[Ze]),_:1})]),e("li",null,[l(o,{to:"/guide/#packages-hooks"},{default:a(()=>[$e]),_:1})]),e("li",null,[l(o,{to:"/guide/#post-bump-hooks"},{default:a(()=>[es]),_:1})]),e("li",null,[l(o,{to:"/guide/#version-dsl"},{default:a(()=>[ss]),_:1})])])])]),os,e("ul",null,[ls,e("li",null,[as,e("ul",null,[e("li",null,[l(o,{to:"/guide/#auto-bump"},{default:a(()=>[ts]),_:1})]),e("li",null,[l(o,{to:"/guide/#packages-hooks"},{default:a(()=>[ns]),_:1})]),e("li",null,[l(o,{to:"/guide/#post-bump-hooks"},{default:a(()=>[is]),_:1})]),e("li",null,[l(o,{to:"/guide/#version-dsl"},{default:a(()=>[cs]),_:1})])])])]),ps,e("ul",null,[rs,us,e("li",null,[ds,l(o,{to:"/config/#pre_bump_hooks"},{default:a(()=>[hs]),_:1}),gs,l(o,{to:"/config/#post_bump_hooks"},{default:a(()=>[ms]),_:1}),_s,fs,bs]),qs])],64)}var Ds=r(u,[["render",js]]);export{Ds as default};
