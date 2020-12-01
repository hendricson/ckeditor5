import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class MyPlugin_editing extends Plugin
{
    init()
    {
        console.log('MyPlugin_editing#init() has been called.');
    }
}