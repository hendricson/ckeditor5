import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import MyPlugin_ui from './myplugin_ui';
import MyPlugin_editing from './myplugin_editing';

export default class MyPlugin extends Plugin
{
    static get requires()
    {
        return [MyPlugin_editing , MyPlugin_ui];
    }
}