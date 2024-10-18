
module.exports = function(RED) {
    function MyInputNode(config) {
        RED.nodes.createNode(this,config);
        let node = this;
        node.on('input', async function(msg) {
            let conf = RED.nodes.getNode(config.config).options;
                try {
                    node.status({ fill: 'green', shape: 'dot', text: 'Get Logs' });
                    node.send(msg);
                }
                catch(e) {
                    node.status({ fill: 'red', shape: 'dot', text: e });
                    node.error(JSON.stringify(e), msg);
                }
        });
    }
    RED.nodes.registerType("my-input-node",MyInputNode);
}
