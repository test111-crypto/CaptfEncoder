const options = {
    value: {
        provider: "factordb.com",
    },
    schema: {
        fields: [{
            type: "select",
            label: "Provider",
            key: "provider",
            items: [{
                text: "factordb.com",
                value: "factordb.com",
            }],
            cols: 4

        }]

    }
}


module.exports = {
    name: 'getter',
    data() {
        return {
            loading: false,
            input: '',
            output: '',
            options: options.value,
            schema: options.schema
        }
    },
    template: `           
<v-container fluid class="ma-2">   
    <ext-loading absolute :show="loading"></ext-loading>
    <ext-form :model="options" :schema="schema">
    </ext-form>
    <v-row height="30" >    
        <v-toolbar flat >
            <v-text-field type="text" v-model="input" outline label="Number">       
            </v-text-field>
            <v-spacer></v-spacer>
            <v-btn elevation="2" @click="get" text class="mx-3" >Get</v-btn>
        </v-toolbar>
    </v-row>
    <v-row>
        <v-col>
            <ext-editor v-model="output" readonly>
            </ext-editor>
        </v-col>
    </v-row> 
</v-container>          
`,
    methods: {
        async get() {
            this.output = '';

            if (this.input) {
              
                this.loading = true;

                const result = await this.$extInvoke('ext.app.provider.factordb.get', this.input, this.options);
              
                if (result.success) {
                    this.output = result.output;
                } else {
                    this.output = '';
                    this.$store.dispatch("showSnackbar", result.message);
                }

                this.loading = false;
            }

        }
    }
}