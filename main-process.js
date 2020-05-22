'use strict'

const { app, BrowserWindow } = require( 'electron' )        // Electron �{��

let main_gui = null

app.on( 'ready', () =>
{
    let win_option = {
        frame: false,   // electron �� �^�C�g���o�[�������i�K�� -webkit-app-region: drag; �ƃy�A�Ŏg�����Ɓj
        width: 900,
        height: 700,
        backgroundColor: '#eee',
        webPreferences: {
            experimentalFeatures:   true, // backdrop-filter: ����K���X�@�\��L���ɂ���
            nodeIntegration:        true, // electron v5.0.0 ����A�����I�� true ���w�肵�Ȃ��ƁArequire( 'electron' ) �Ɏ��s����
        }
    }

    win_option.width = 1300    // debug ���� 400���ɍL������

    main_gui = new BrowserWindow( win_option )
    main_gui.loadURL( 'file://' + __dirname + '/renderer-process.html' )

    main_gui.webContents.openDevTools()     // debug
} )
