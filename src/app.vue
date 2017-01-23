<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal>
      <f7-view navbar-through :dynamic-navbar="true">
        <f7-pages>
          <f7-page>
            <f7-block inner>
              <p>左侧边</p>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <f7-navbar sliding>
             <f7-nav-left>
               <f7-link icon="icon-bars" open-panel="left"></f7-link>
             </f7-nav-left>
              <f7-nav-center>我的音乐</f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-search"></f7-link>
              </f7-nav-right>
            </f7-navbar>
             <f7-block>
                <f7-grid>
                    <f7-col width="50">
                     <f7-button href="/themes" class="button">选择主题颜色</f7-button>
                    </f7-col>
                    <f7-col width="50">
                     <f7-button href="/song" class="button">打开播放页</f7-button>
                    </f7-col>
                    <f7-col width="50">
                     <f7-button href="/playlist" class="button">打开播放列表</f7-button>
                    </f7-col>
                </f7-grid>
             </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>
export default {}
</script>
