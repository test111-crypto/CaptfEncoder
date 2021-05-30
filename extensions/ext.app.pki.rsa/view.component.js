const options = {
    value: {
        key: '',
        keyKind: 'PUBLIC'
    },
    schema: {
        fields: [{
            type: "textarea",
            label: "Key",
            key: "key",
            cols: 6
        },{
            type: "select",
            label: "Public/Private Key",
            key: "keyKind",
            items: [{
                text: "Public",
                value: "PUBLIC"
            },{
                text: "Private",
                value: "PRIVATE"
            }],
            cols: 3

        }]
    }
}

module.exports = {
    name: 'ext.app.pki.rsa.view.component',
    data() {
        return {
            options: options || {}
        }
    },
    template: `
<ext-tab-encoder
    title="RSA 加解密" 
    :options="options.value" 
    :schema="options.schema"
    encode="ext.app.pki.rsa.encode" 
    decode="ext.app.pki.rsa.decode"
    encodeText="加密"
    decodeText="解密">
</ext-tab-encoder>
`,   
}