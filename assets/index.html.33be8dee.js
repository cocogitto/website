import{r as o,o as r,c as p,a as s,b as n,w as c,F as i,d as a,e}from"./app.500b9ae0.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var d="/assets/cog-bot-ok.372fda1f.png",u="/assets/cog-bot-ko.cddd106b.png";const g={},m=s("h2",{id:"github-action",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#github-action","aria-hidden":"true"},"#"),a(" GitHub action")],-1),j={href:"https://github.com/cocogitto/cocogitto-action",target:"_blank",rel:"noopener noreferrer"},_=a("cocogitto-action"),b=a(" can be used in your GitHub action CI/CD to perform release, check commits against the conventional commits specification and create changelogs."),f=e(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The action runs on x86 linux runner only.</p></div><h3 id="conventional-commits-check" tabindex="-1"><a class="header-anchor" href="#conventional-commits-check" aria-hidden="true">#</a> Conventional commits check</h3><p>By default, if no additional argument is provided cocogitto-action will just check that all your commits are conventional commits compliant :</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="hljs-attr">on:</span> [<span class="hljs-string">push</span>]

<span class="hljs-attr">jobs:</span>
  <span class="hljs-attr">cog_check_job:</span>
    <span class="hljs-attr">runs-on:</span> <span class="hljs-string">ubuntu-latest</span>
    <span class="hljs-attr">name:</span> <span class="hljs-string">check</span> <span class="hljs-string">conventional</span> <span class="hljs-string">commit</span> <span class="hljs-string">compliance</span>
    <span class="hljs-attr">steps:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@main</span>
        <span class="hljs-attr">with:</span>
          <span class="hljs-attr">fetch-depth:</span> <span class="hljs-number">0</span>

      <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Conventional</span> <span class="hljs-string">commits</span> <span class="hljs-string">check</span>
        <span class="hljs-attr">uses:</span> <span class="hljs-string">oknozor/cocogitto-action@v3</span>
</code></pre></div>`,4),v={class:"custom-container warning"},k=s("p",{class:"custom-container-title"},"WARNING",-1),y=a("You need to use the checkout action with "),w={href:"https://github.com/actions/checkout#fetch-all-history-for-all-tags-and-branches",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"fetch-depth: 0",-1),C=a(" option to get the full git history before running cocogitto-action."),G=e(`<p>If you want the action to check only commits since the latest SemVer tag you can do the following:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code>  <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Conventional</span> <span class="hljs-string">commits</span> <span class="hljs-string">check</span>
    <span class="hljs-attr">uses:</span> <span class="hljs-string">oknozor/cocogitto-action@v3</span>
    <span class="hljs-attr">with:</span>
      <span class="hljs-attr">check-latest-tag-only:</span> <span class="hljs-literal">true</span>
</code></pre></div><h3 id="conventional-commits-release" tabindex="-1"><a class="header-anchor" href="#conventional-commits-release" aria-hidden="true">#</a> Conventional commits release</h3><p>To create a release with cocogitto-action simply add the <code>release</code> option :</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code>  <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Semver</span> <span class="hljs-string">release</span>
    <span class="hljs-attr">uses:</span> <span class="hljs-string">oknozor/cocogitto-action@v3</span>
    <span class="hljs-attr">with:</span>
      <span class="hljs-attr">release:</span> <span class="hljs-literal">true</span>
      <span class="hljs-attr">git-user:</span> <span class="hljs-string">&#39;Cog Bot&#39;</span>
      <span class="hljs-attr">git-user-email:</span> <span class="hljs-string">&#39;mycoolproject@org.org&#39;</span>
</code></pre></div><p>This will run <code>cog bump --auto</code> during the step execution.</p><p>If you need to use the created version number later in your job you can access it like so :</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code>  <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Print</span> <span class="hljs-string">version</span>
    <span class="hljs-attr">run:</span> <span class="hljs-string">&quot;echo &#39;$<span class="hljs-template-variable">{{ steps.release.outputs.version }}</span>&#39;&quot;</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can set the <code>git-user</code> and <code>git-user-email</code> options to override the default git signature for the release commit.</p><p>You might also want to use a dedicated GitHub account to perform the release, this can be done using the checkout action:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code>      <span class="hljs-bullet">-</span> <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v3</span>
        <span class="hljs-attr">with:</span>
          <span class="hljs-attr">fetch-depth:</span> <span class="hljs-number">0</span>
          <span class="hljs-attr">ssh-key:</span> <span class="hljs-string">\${{</span> <span class="hljs-string">secrets.SERVICE_ACCOUNT_SSH_KEY</span> <span class="hljs-string">}}</span>
          
      <span class="hljs-comment"># Perform release ... </span>
</code></pre></div></div><p>Also see:</p>`,10),H=a("User guide -> Cog check"),I=e(`<h3 id="github-release-changelog" tabindex="-1"><a class="header-anchor" href="#github-release-changelog" aria-hidden="true">#</a> GitHub release changelog</h3><p>Depending on the options provided the action will run check and/or create a release but if you need to perform some custom steps you can directly use <code>cog</code>.</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="hljs-attr">on:</span>
  <span class="hljs-attr">workflow_dispatch:</span>
    <span class="hljs-attr">branches:</span> <span class="hljs-string">main</span>

<span class="hljs-attr">jobs:</span>
  <span class="hljs-attr">release:</span>
    <span class="hljs-attr">name:</span> <span class="hljs-string">Perform</span> <span class="hljs-string">release</span>
    <span class="hljs-attr">runs-on:</span> <span class="hljs-string">ubuntu-latest</span>
    <span class="hljs-attr">permissions:</span>
      <span class="hljs-attr">contents:</span> <span class="hljs-string">write</span>
    <span class="hljs-attr">steps:</span>
      <span class="hljs-bullet">-</span> <span class="hljs-attr">uses:</span> <span class="hljs-string">actions/checkout@v3</span>
        <span class="hljs-attr">with:</span>
          <span class="hljs-attr">fetch-depth:</span> <span class="hljs-number">0</span>

      <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Cocogitto</span> <span class="hljs-string">release</span>
        <span class="hljs-attr">id:</span> <span class="hljs-string">release</span>
        <span class="hljs-attr">uses:</span> <span class="hljs-string">oknozor/cocogitto-action@v3</span>
        <span class="hljs-attr">with:</span>
          <span class="hljs-attr">release:</span> <span class="hljs-literal">true</span>
          <span class="hljs-attr">git-user:</span> <span class="hljs-string">&#39;Cog Bot&#39;</span>
          <span class="hljs-attr">git-user-email:</span> <span class="hljs-string">&#39;mycoolproject@org.org&#39;</span>

      <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Generate</span> <span class="hljs-string">Changelog</span>
        <span class="hljs-attr">run:</span> <span class="hljs-string">cog</span> <span class="hljs-string">changelog</span> <span class="hljs-string">--at</span> <span class="hljs-string">\${{</span> <span class="hljs-string">steps.release.outputs.version</span> <span class="hljs-string">}}</span> <span class="hljs-string">-t</span> <span class="hljs-string">full_hash</span> <span class="hljs-string">&gt;</span> <span class="hljs-string">GITHUB_CHANGELOG.md</span>

      <span class="hljs-bullet">-</span> <span class="hljs-attr">name:</span> <span class="hljs-string">Upload</span> <span class="hljs-string">github</span> <span class="hljs-string">release</span>
        <span class="hljs-attr">uses:</span> <span class="hljs-string">softprops/action-gh-release@v1</span>
        <span class="hljs-attr">with:</span>
          <span class="hljs-attr">body_path:</span> <span class="hljs-string">GITHUB_CHANGELOG.md</span>
          <span class="hljs-attr">tag_name:</span> <span class="hljs-string">\${{</span> <span class="hljs-string">steps.release.outputs.version</span> <span class="hljs-string">}}</span>
          <span class="hljs-attr">token:</span> <span class="hljs-string">\${{</span> <span class="hljs-string">secrets.GITHUB_TOKEN</span> <span class="hljs-string">}}</span>
</code></pre></div><p>Also see:</p>`,4),N=a("User guide -> Automatic Versioning"),T=e('<p>Note that you can disable the <code>check</code> option if needed.</p><h3 id="action-reference" tabindex="-1"><a class="header-anchor" href="#action-reference" aria-hidden="true">#</a> Action reference</h3><p>Here are all the inputs available through <code>with</code>:</p><table><thead><tr><th>Option</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>check</code></td><td>Check conventional commit compliance with <code>cog check</code></td><td><code>true</code></td></tr><tr><td><code>check-latest-tag-only</code></td><td>Check conventional commit compliance with <code>cog check --from-latest-tag</code></td><td><code>false</code></td></tr><tr><td><code>release</code></td><td>Perform a release using <code>cog bump --auto</code></td><td><code>false</code></td></tr><tr><td><code>git-user</code></td><td>Set the git <code>user.name</code> to use for the release commit</td><td><code>cog-bot</code></td></tr><tr><td><code>git-user-email</code></td><td>Set the git <code>user.email</code> to use for the release commit</td><td><code>cog@demo.org</code></td></tr></tbody></table><h2 id="github-bot" tabindex="-1"><a class="header-anchor" href="#github-bot" aria-hidden="true">#</a> GitHub Bot</h2><p>Cocogitto also has a GitHub bot that decorate pull request with status check.</p>',6),A=a("To install it just go to "),B={href:"https://github.com/apps/cocogitto-bot",target:"_blank",rel:"noopener noreferrer"},E=a("github.com/apps/cocogitto-bot"),S=a(' and click "Configure". Add the desired repository and grant the required permission.'),q=s("p",null,"Once it is done cocogitto-bot will comment on every pull-request events :",-1),U=s("p",null,[s("strong",null,"Example:")],-1),V=s("p",null,"Success:",-1),L=s("p",null,[s("img",{src:d,alt:"cocogitto bot success example"})],-1),O=s("p",null,"Failure:",-1),P=s("p",null,[s("img",{src:u,alt:"cocogitto bot failure example"})],-1),R={class:"custom-container tip"},Y=s("p",{class:"custom-container-title"},"TIP",-1),$=a("You can "),z={href:"https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks",target:"_blank",rel:"noopener noreferrer"},D=a("make status check mandatory"),F=a(" to enforce conventional commits in your pull-requests.");function K(W,J){const t=o("ExternalLinkIcon"),l=o("RouterLink");return r(),p(i,null,[m,s("p",null,[s("a",j,[_,n(t)]),b]),f,s("div",v,[k,s("p",null,[y,s("a",w,[x,n(t)]),C])]),G,s("ul",null,[s("li",null,[n(l,{to:"/guide/#check-commit-history"},{default:c(()=>[H]),_:1})])]),I,s("ul",null,[s("li",null,[n(l,{to:"/guide/#auto-bump"},{default:c(()=>[N]),_:1})])]),T,s("p",null,[A,s("a",B,[E,n(t)]),S]),q,U,V,L,O,P,s("div",R,[Y,s("p",null,[$,s("a",z,[D,n(t)]),F])])],64)}var X=h(g,[["render",K]]);export{X as default};
