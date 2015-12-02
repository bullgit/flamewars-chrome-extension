'use strict';

const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

while (treeWalker.nextNode()) {
  var node = treeWalker.currentNode;
  node.nodeValue = node.nodeValue.replace(/(F|f)ramework/g, '$1lamewar');
}
