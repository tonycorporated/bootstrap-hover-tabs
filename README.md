Bootstrap Hover Tabs
====================

This is a super-simple and lightweight plugin for Bootstrap which allows you to activate tabs on hover.

**Note:** This plugin is also available via [Bootstrap Plugins](http://bootstrap.tonystar.me/plugins) — the ultimate set of must-have plugins for Bootstrap.

Usage
-----

First, add this script somewhere after `bootstrap.js`:

```html
<script src="//cdn.rawgit.com/tonystar/bootstrap-hover-tabs/master/bootstrap-hover-tabs.js"></script>
```

Then, just add `data-hover="tab"` in addition to `data-toggle="tab"` for each tab link.

Example
-------

```html
<div>

  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li class="active"><a href="#home" data-toggle="tab" data-hover="tab">Home</a></li>
    <li><a href="#profile" data-toggle="tab" data-hover="tab">Profile</a></li>
    <li><a href="#messages" data-toggle="tab" data-hover="tab">Messages</a></li>
    <li><a href="#settings" data-toggle="tab" data-hover="tab">Settings</a></li>
  </ul>

  <!-- Tab panes -->
  <div class="tab-content">
    <div class="tab-pane active" id="home">...</div>
    <div class="tab-pane" id="profile">...</div>
    <div class="tab-pane" id="messages">...</div>
    <div class="tab-pane" id="settings">...</div>
  </div>

</div>
```

## [Docs →](http://bootstrap.tonystar.me/hover-tabs)
