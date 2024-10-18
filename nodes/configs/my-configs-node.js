module.exports = function (RED)  {
    function MyConfigsNode(n) {
        RED.nodes.createNode(this, n);
        this.options = {
            name : n.name || n.id,
        }
    }

    RED.nodes.registerType('my-configs-node', MyConfigsNode);
}
