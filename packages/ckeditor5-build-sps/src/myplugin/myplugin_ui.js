import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class MyPlugin_ui extends Plugin
{
    init()
    {
        console.log('MyPlugin_ui#init() has been called.');
    }
}