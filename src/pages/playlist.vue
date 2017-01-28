<template>
  <f7-page name="playlist">
   <f7-navbar back-link="Back" sliding>
     <f7-nav-center>播放列表</f7-nav-center>
     <f7-nav-right>
       <f7-link icon="icon-bars" open-panel="left"></f7-link>
     </f7-nav-right>
   </f7-navbar>
   <f7-list media-list class="play-list">
    <f7-list-item link title="死结" subtitle="李玖哲 - 不，完美" media="1"></f7-list-item>
    <f7-list-item title="Por Una Cabeza" subtitle="Thomas Newman - Scent Of A Woman" media="2"></f7-list-item>
   </f7-list>
  </f7-page>
</template>

<script>
export default {
}
</script>
