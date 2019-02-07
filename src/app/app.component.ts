import { Component } from '@angular/core';
import {TreeModel, NodeInterface, ConfigInterface} from 'ng6-file-man';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng6 file man demo';
  tree: TreeModel;
  node: NodeInterface;
  appLanguage = 'fr';

  constructor(){
// app.component.ts

const treeConfig: ConfigInterface = {
  baseURL: 'http://localhost:8080/',
  api: {
    listFile: 'api/file/list',
    uploadFile: 'api/file/upload',
    downloadFile: 'api/file/download',
    deleteFile: 'api/file/remove',
    createFolder: 'api/file/directory',
    renameFile: 'api/file/rename',
    searchFiles: 'api/file/search'
  },
  options: {
    allowFolderDownload: false,
    showFilesInsideTree: false
  }
};
this.tree = new TreeModel(treeConfig);
this.node = this.tree.nodes;
}  
// noinspection JSUnusedLocalSymbols
  itemClicked(event: any) {
    // console.log(event);
  }


}
