(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/DockerImages/docker-images.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/DockerImages/docker-images.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<message duration=\"10000\" [(active)]=\"errorVisible\" type=\"alert-danger\">\n  <i class=\"material-icons align-middle\">warning</i> The tool could not be removed since it is in use by one or more packages or templates.\n</message>\n\n<div class=\"row\">\n\n  <!-- Existing tools, left side -->\n  <div class=\"col-lg-6\">\n    <h4>Existing Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <div *ngFor=\"let image of images\" class=\"list-group-item list-group-item-action\" (click)=\"selectImage(image)\" [class.active]=\"image.id == selectedImage.id\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{image.label}}</p>\n            <i class=\"material-icons icon-button\" (click)=\"deleteImage(image)\">delete</i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"openNewImageModal()\">Add new docker image</button>\n    <a *ngIf=\"selectedImage.id != -1\" class=\"btn btn-secondary\" href=\"/api/image/{{selectedImage.id}}/export/\">Export image</a>\n  </div>\n\n  <!-- Detail view of tool -->\n\n  <div class=\"col-lg-6\" *ngIf=\"selectedImage.id != -1\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Settings</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n          Save\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <message duration=\"3000\" [(active)]=\"saveSuccess\">All changes have been saved!</message>\n        <div class=\"form-group\">\n          <label for=\"inputLabel\">Name of the image (display name)</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputLabel\" placeholder=\"DROID\" [(ngModel)]=\"selectedImage.label\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputname\">Image tag (This is the docker-name of the image, added with --tag when an image is created)</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputname\" placeholder=\"droid\" [(ngModel)]=\"selectedImage.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputMount\">Mount point of workdir inside image.</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputMount\" placeholder=\"/workdir/\" [(ngModel)]=\"selectedImage.mountpoint\">\n        </div>\n        <button class=\"btn btn-success\" (click)=\"save()\">\n          Save\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<modal [(active)]=\"modalactive\" title=\"Upload new docker image\">\n  <div modal-body>\n    <div class=\"alert alert-info\" *ngIf=\"modalMessage\">\n      Uploading image, {{uploadDone}}/{{uploadTotal}}\n    </div>\n    <div class=\"alert alert-warning\" *ngIf=\"modalOther.length > 0\">\n      {{modalOther}}\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputLabel\">Name of the image (display name)</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputLabel\" placeholder=\"i.e. DROID\" [(ngModel)]=\"newLabel\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputLabel\">Path to workdir inside image</label>\n      <input type=\"text\" class=\"form-control\" id=\"pathLabel\" placeholder=\"i.e. /code/workdir\" [(ngModel)]=\"newPath\">\n    </div>\n\n    <label for=\"inputLabel\">Docker image. (generated with docker save)</label>\n    <div class=\"custom-file\" id=\"customFile\" lang=\"en\">\n      <input type=\"file\" class=\"custom-file-input\" id=\"exampleInputFile\" (change)=\"fileSelected($event)\" name=\"import.tar\">\n      <label class=\"custom-file-label\" for=\"exampleInputFile\" [class.border-success]=\"fileStatus==2\" [class.border-danger]=\"fileStatus==1\">\n        {{fileName}}\n      </label>\n\n    </div>\n    <button class=\"btn btn-success\" type=\"submit\" (click)=\"importImage()\">Save</button>\n  </div>\n\n\n</modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/GlobalVariables/global-variables.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/GlobalVariables/global-variables.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h5 style=\"float:left\">Paths</h5>\n    <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n      Save changes\n      <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n    </button>\n  </div>\n  <div class=\"card-body\">\n    <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Working directory</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"workdirPath\" tooltip=\"A directory for temporary project files to be stored while they are in use in A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"/code/workdir\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Packages directory</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"packagesPath\" tooltip=\"The location of packages to be included in A.P.P. i.e. Workarea in EPP\" tooltipPlacement=\"bottom\" placeholder=\"/ESSArch/data/epp/workarea\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">APP log file (premis)</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"premisFileName\" tooltip=\"The name of the premis log file generated by A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"app_log.xml\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputName\">Directory for all tool files</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"toolsPath\" tooltip=\"The absolute path of the directory where the tools are saved in A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"/code/tools\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">The absolute path of the workdir on docker host</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"workdirPathHost\" tooltip=\"This is necessary since it is this folder that will be mounted into containers created by A.P.P\" tooltipPlacement=\"bottom\" placeholder=\"/Docker/APP/Django/workdir\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"inputName\">Json template for app log file</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"premisTemplatePath\" tooltip=\"The json document used as a template for app log.\" tooltipPlacement=\"bottom\" placeholder=\"/code/templates/premis.json\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Json template for log additions</label>\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"premisEventTemplatePath\" tooltip=\"This should be a template for the part of the logfile that is repeated for every event\" tooltipPlacement=\"bottom\" placeholder=\"/code/templates/premisEvent.json\">\n    </div>\n\n    <button class=\"btn btn-success\" (click)=\"save()\">\n      Save changes\n      <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Header/header.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar>\n</navbar>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Modules/modules.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Modules/modules.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Error message displayed if the module could not be removed -->\n<message duration=\"10000\" [(active)]=\"errorVisible\" type=\"alert-danger\">\n  <i class=\"material-icons align-middle\">warning</i> {{errorMessage}}\n</message>\n<div class=\"row\">\n\n  <!-- Existing tools, left side -->\n  <div class=\"col-lg-4\">\n    <h4>Existing Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <div *ngFor=\"let module of modules\" class=\"list-group-item list-group-item-action\" (click)=\"selectModule(module)\" [class.active]=\"module.module_id == selectedModule.module_id\">\n          <div class=\"d-flex w-100 justify-content-between\">\n            <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n            <i class=\"material-icons icon-button\" (click)=\"deleteModule(module)\">delete</i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"addNewModule()\">\n      Add new tool\n      <i class=\"material-icons my-auto align-middle\">add</i>\n    </button>\n    <button class=\"btn\" (click)=\"importModule()\">\n      Import tool\n    </button>\n  </div>\n\n  <!-- Detail view of tool -->\n\n  <div class=\"col-lg-8\" *ngIf=\"selectedModule.module_id != -1\">\n    <h4>{{title}}</h4>\n\n    <!-- display the form if there is one -->\n    <div class=\"card\" *ngIf=\"selectedModule.form.length > 0\">\n      <div class=\"card-header\">\n        <h5>Form preview</h5>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"form-group\" *ngFor=\"let input of selectedModule.form\">\n          <div class=\"form-check\" *ngIf=\"input.type=='checkbox'\">\n            <input class=\"form-check-input\" type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"input.default\" />\n            <label class=\"form-check-label\" for=\"{{input.identifier}}\">\n              {{input.label}}\n            </label>\n          </div>\n          <ng-template [ngIf]=\"input.type=='text'\">\n            <label for=\"{{input.identifier}}\">{{input.label}}</label>\n            <input type=\"text\" class=\"form-control\" [id]=\"input.identifier\" placeholder=\"{{input.identifier}}\" [value]=\"input.default ? input.default : ''\">\n          </ng-template>\n        </div>\n      </div>\n    </div>\n\n    <!-- Display the general settings -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Settings</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n          Save changes\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <p class=\"Error-text\">{{commandJsonError}}</p>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Virus scan ClamAV\" [(ngModel)]=\"selectedModule.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputDescription\">Description - for log file</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputDescription\" [(ngModel)]=\"selectedModule.description\" placeholder=\"Sentence describing what the tool does\">\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"inputHidden\" [(ngModel)]=\"selectedModule.hidden\">\n            <label class=\"form-check-label\" for=\"inputHidden\">Hidden</label>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputFileFilter\">File filter</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputFileFilter\" [(ngModel)]=\"selectedModule.filter\" placeholder=\".*(\\.pdf)\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputForm\">\n            Form json\n            <i class=\"material-icons icon-button my-auto icon-small\" (click)=\"openFormJsonDocs()\">help</i>\n          </label>\n          <textarea class=\"form-control\" id=\"inputForm\" rows=\"7\" [(ngModel)]=\"formJson\"></textarea>\n        </div>\n\n        <p class=\"Error-text\">{{formJsonError}}</p>\n        <p>Avaliable types: checkbox, text (Should I create a ui for configuring the form or should I write documentation?)</p>\n\n        <!-- Display logfile checks -->\n        <h5 class=\"input-label\">\n          What qualifies succes in the log files:\n        </h5>\n        <div *ngFor=\"let filter of selectedModule.resultFilter\">\n          <div class=\"form-row\">\n            <select class=\"custom-select col-sm-3 my-1 my-auto\" [(ngModel)]=\"filter.type\">\n              <option value=\"Containing\">Containing</option>\n              <option value=\"Not containing\">Not containing</option>\n            </select>\n            <div class=\"form-group my-auto\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"[\\w\\W]*pattern[\\w\\W]*\" [(ngModel)]=\"filter.value\">\n            </div>\n            <i class=\"material-icons icon-button my-auto\" (click)=\"removeResultFilter(filter)\">delete</i>\n          </div>\n        </div>\n        <hr>\n        <p>Add a new filter</p>\n        <div class=\"form-row\">\n          <select class=\"custom-select col-sm-3 my-1 my-auto\" [(ngModel)]=\"newResultFilter.type\">\n            <option value=\"Containing\">Containing</option>\n            <option value=\"Not containing\">Not containing</option>\n          </select>\n          <div class=\"form-group my-auto\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"[\\w\\W]*pattern[\\w\\W]*\" [(ngModel)]=\"newResultFilter.value\">\n          </div>\n          <i class=\"material-icons icon-button my-auto\" (click)=\"addResultFilter(filter)\">add</i>\n        </div>\n      </div>\n    </div>\n\n    <!-- Display the actual command to be run -->\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Command</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n          Save changes\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n      <div class=\"card-body\">\n\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <label class=\"input-label\">\n          Type:\n          <select class=\"custom-select my-1 my-auto\" [(ngModel)]=\"selectedModule.type\">\n            <option value=\"Command\">Command</option>\n            <option value=\"Python module\">Python module</option>\n            <option value=\"Docker Container\">Docker Container</option>\n            <option value=\"Smart docker module\">Smart docker module</option>\n          </select>\n        </label>\n        <div class=\"form-group\" *ngIf=\"selectedModule.type == 'Command'\">\n          <label for=\"commandForm\">\n            Command\n            <i class=\"material-icons icon-button my-auto icon-small\" (click)=\"openModalCommandDocs()\">help</i>\n          </label>\n          <textarea class=\"form-control\" id=\"commandForm\" rows=\"7\" [(ngModel)]=\"selectedModule.command\"></textarea>\n        </div>\n        <div class=\"form-group\" *ngIf=\"selectedModule.type == 'Python module'\">\n          <label for=\"inputName\">Python Module</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Path to python file\" [(ngModel)]=\"selectedModule.python_module\">\n        </div>\n        <!-- If command type is docker -->\n        <ng-template [ngIf]=\"selectedModule.type == 'Docker Container'\">\n          <label class=\"input-label\">\n            Docker image:\n            <select class=\"custom-select my-1 my-auto\" [(ngModel)]=\"selectedModule.dockerImage\">\n              <option *ngFor=\"let image of images\" value=\"{{image.id}}\">{{image.label}}</option>\n            </select>\n          </label>\n          <div class=\"form-group\">\n            <label for=\"commandForm\">Command<i class=\"material-icons icon-button my-auto icon-small\" (click)=\"openModalCommandDocs()\">help</i></label>\n            <textarea class=\"form-control\" id=\"commandForm\" rows=\"7\" [(ngModel)]=\"selectedModule.command\"></textarea>\n          </div>\n          <!-- <button class=\"btn btn-success\" (click)=\"uploadDockerImage\">Upload Docker Image</button> -->\n          <!-- <div class=\"form-group\">\n            <label for=\"inputName\">Mount point for files/folder</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputName\">\n          </div> -->\n        </ng-template>\n        <ng-template [ngIf]=\"selectedModule.type == 'Smart docker module'\">\n          <label class=\"input-label\">\n            Docker image:\n            <select class=\"custom-select my-1 my-auto\" [(ngModel)]=\"selectedModule.dockerImage\">\n              <option *ngFor=\"let image of images\" value=\"{{image.id}}\">{{image.label}}</option>\n            </select>\n          </label>\n          <div class=\"form-group\">\n            <label for=\"inputName\">Number of parallell processes</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"1\" [(ngModel)]=\"selectedModule.parallell_jobs\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"commandForm\">Command<i class=\"material-icons icon-button my-auto icon-small\" (click)=\"openModalCommandDocs()\">help</i></label>\n            <textarea class=\"form-control\" id=\"commandForm\" rows=\"7\" [(ngModel)]=\"selectedModule.command\"></textarea>\n          </div>\n          <!-- <button class=\"btn btn-success\" (click)=\"uploadDockerImage\">Upload Docker Image</button> -->\n          <!-- <div class=\"form-group\">\n            <label for=\"inputName\">Mount point for files/folder</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputName\">\n          </div> -->\n        </ng-template>\n        <p class=\"Error-text\">{{commandJsonError}}</p>\n        <button class=\"btn btn-success\" (click)=\"openFileBrowser()\">\n          Browse files\n          <i class=\"material-icons my-auto align-middle icon-small\">folder_open</i>\n        </button>\n        <!-- <button class=\"btn btn-success\" (click)=\"save()\">Save changes</button> -->\n        <!-- <p>Export will export a tar file containing the json strucutre and the python file, if it exists</p> -->\n      </div>\n    </div>\n    <a class=\"btn btn-secondary\" href=\"/api/module/{{selectedModule.module_id}}/export/\">Export tool</a>\n    <button class=\"btn btn-danger\" (click)=\"deleteModule(selectedModule)\">\n      Delete\n      <i class=\"material-icons my-auto align-middle icon-small\">delete</i>\n    </button>\n    <div class=\"allow-scroll-beneath-page-end\"></div>\n  </div>\n</div>\n\n<modal [(active)]=\"modalactive\">\n  <div modal-body>\n    <form method=\"post\" enctype=\"multipart/form-data\">\n      <div class=\"custom-file\" id=\"customFile\" lang=\"en\">\n        <input type=\"file\" class=\"custom-file-input\" id=\"exampleInputFile\" (change)=\"fileSelected($event)\" name=\"import.tar\">\n        <label class=\"custom-file-label\" for=\"exampleInputFile\" [class.border-success]=\"fileStatus==2\" [class.border-danger]=\"fileStatus==1\">\n          {{fileName}}\n        </label>\n      </div>\n      <button class=\"btn btn-success\" type=\"submit\" (click)=\"uploadFile()\">Upload</button>\n    </form>\n  </div>\n</modal>\n\n<app-filebrowser [(active)]=\"browserActive\" [path]=\"browserPath\" [canCreateFolder]=\"false\"></app-filebrowser>\n\n<modal [(active)]=\"docsActive\" title=\"Form documentation\">\n  <div modal-body>\n    <p>\n      The form is specified as a json document. The structure must be an array of dictionaries. i.e. [ {{ '{' }}...{{ '}' }}, {{ '{' }}...{{ '}' }}, ...]\n    </p>\n    <p>\n      Each dictionay specifies one field in the form.\n    </p>\n\n    <ul>\n      <li>\n        <h5>type: [string] (required)</h5>\n        <p>\n          The type specifies which kind of form element is supposed to render. Options are: 'text' or 'checkbox'\n        </p>\n      </li>\n      <li>\n        <h5>identifier: [string] (required)</h5>\n        <p>\n          Identifer is the id that will be used in a command to select the value of this field. regex for possibilities: [a-Z0-9-_]\n        </p>\n      </li>\n      <li>\n        <h5>label: [string] (required)</h5>\n        <p>\n          A label which will be displayed in the final form. This can be any string.\n        </p>\n      </li>\n      <li>\n        <h5>default: [string] (optional)</h5>\n        <p>\n          An optional default state for the form. For a checkbox it must be true or false and for a textfield it must be a string.\n        </p>\n      </li>\n    </ul>\n  </div>\n</modal>\n\n<modal [(active)]=\"commandDocsActive\" title=\"Command documentation\">\n  <div modal-body>\n    <p>\n      The command field lets you specify the unix command that will be executed.<br/>\n      It is executed once for every file in the package.\n    </p>\n    <p>\n      Variables can be added to allow for more dynamic commands.\n      For example can the name of the file be used in the command. A variable is prefixed with hashtag (#). In the example below the variable \"file\" is used.\n    </p>\n    <p>\n      The variables can be defined in the form json field above.\n      There are also som predefined variables built-in listed below.\n    </p>\n    <p>\n      Example: <span class=\"code_example\">unoconv -f pdf -e SelectPdfVersion=1 #file</span>\n    </p>\n    <ul>\n      <li>\n        <h5>tar_path</h5>\n        <p>\n          The absolute location of the tar file containing the package.\n        </p>\n      </li>\n      <li>\n        <h5>workdir</h5>\n        <p>\n          The absolute path for the package's workdir.\n        </p>\n      </li>\n      <li>\n        <h5>tar_name</h5>\n        <p>\n          The name of the tar archive file containing the package.\n        </p>\n      </li>\n      <li>\n        <h5>file</h5>\n        <p>\n          The absolute path of the current file beeing executed.\n        </p>\n      </li>\n    </ul>\n  </div>\n</modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Templates/Templates.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Templates/Templates.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <!-- Error message for removal of templates in use -->\n  <message duration=\"10000\" [(active)]=\"errorVisible\" type=\"alert-danger\">\n    <i class=\"material-icons align-middle\">warning</i> The template could not be removed since it is in use by one or more packages.\n  </message>\n  <!-- list of all templates -->\n  <h4 style=\"clear: both; width: 100%\">Templates</h4>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\" (drop)=\"onDrop($event)\" (dragover)=\"allowDropTop($event)\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <ng-template ngFor let-template [ngForOf]=\"templates\">\n          <div class=\"list-group-item list-group-item-action\" [class.active]=\"template.template_id==selected_template_id\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectTemplate(template)\">\n                {{template.name}}\n              </p>\n              <!-- <i class=\"material-icons\">arrow_back</i> -->\n              <i class=\"material-icons icon-button\" (click)=\"deleteTemplate(template)\" *ngIf=\"!template.hidden\">delete</i>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" (click)=\"createTemplateModal()\">Create new template</button>\n  </div>\n\n  <!-- Basic settings in a template (Only name at this time) -->\n  <div class=\"col-lg-6\">\n    <div class=\"card\" *ngIf=\"selected_template_id != -1\">\n      <div class=\"card-header\">\n        <h5 style=\"float:left\">Settings</h5>\n        <button class=\"btn btn-success\" (click)=\"save()\" style=\"float:right\">\n          Save changes\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n      <div class=\"card-body\">\n        <message duration=\"3000\" [(active)]=\"messageVisible\">All changes have been saved!</message>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selected_template.name\" placeholder=\"Virus scanning - ClamAV\">\n        </div>\n        <button class=\"btn btn-success float-right\" (click)=\"save()\">\n          Save\n          <i class=\"material-icons my-auto align-middle icon-small\">save</i>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Processes and tools inside the template. Much like the Package.component.ts view -->\n<div class=\"row\" *ngIf=\"selected_template_id != -1\">\n  <div class=\"col-lg-6\" *ngIf=\"selected_template_id != -1\">\n    <h4>Tools in {{selected_template.name}}</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\" (dragover)=\"allowDropTop($event)\" (drop)=\"onDrop($event)\">\n        Name\n      </div>\n      <ng-template ngFor let-process [ngForOf]=\"selected_template.processes\" let-i=\"index\">\n        <div class=\"list-group list-group-flush\">\n          <div draggable=\"true\" (dragstart)=\"dragStart($event, process.process_id, 'template', process.name)\" (drop)=\"onDrop($event)\" (dragover)=\"allowDrop($event, process.order)\" class=\"list-group-item list-group-item-action\" [class.active]=\"process.process_id==selected_process_id\"\n              [class.placeholder]=\"process.type=='placeholder'\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                {{process.name}}\n              </p>\n              <!-- <i class=\"material-icons\">arrow_back</i> -->\n              <i *ngIf=\"i > 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process)\">keyboard_arrow_up</i>\n              <i *ngIf=\"i < selected_template.processes.length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process)\">keyboard_arrow_down</i>\n              <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process)\">delete</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n            <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n              <form *ngIf=\"process.form.length>0\">\n                <div class=\"form-group\" *ngFor=\"let input of process.form\">\n                  <div class=\"form-check\" *ngIf=\"input.type=='checkbox'\">\n                    <input\n                      class=\"form-check-input\"\n                      type=\"checkbox\"\n                      *ngIf=\"input.type=='checkbox'\"\n                      [id]=\"input.identifier\"\n                      [checked]=\"getProcessValue(input.identifier)\"\n                      (change)=\"setProcessValue(input.identifier, $event.target.checked)\"\n                      />\n                    <label class=\"form-check-label\" for=\"{{input.identifier}}\">\n                      {{input.label}}\n                    </label>\n                  </div>\n                  <ng-template [ngIf]=\"input.type=='text'\">\n                    <label for=\"{{input.identifier}}\">{{input.label}}</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      [id]=\"input.identifier\"\n                      placeholder=\"{{input.identifier}}\"\n                      [value]=\"getProcessValue(input.identifier)\"\n                      (change)=\"setProcessValue(input.identifier, $event.target.value)\"\n                      (keyup)=\"setProcessValue(input.identifier, $event.target.value)\"\n                      >\n                  </ng-template>\n                </div>\n                <!-- <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                  {{input.label}}\n                  <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                </label> -->\n              </form>\n            </ng-template>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n\n  <!-- Tool/Modules list -->\n  <div class=\"col-lg-6\">\n    <h4>Avaliable Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <ng-template ngFor let-module [ngForOf]=\"modules\">\n        <div class=\"list-group list-group-flush\">\n          <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n              <i class=\"material-icons icon-button\" (click)=\"addProcessLast(module.module_id)\">add</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n\n<!-- Modal for creation of new templates -->\n<modal [(active)]=\"createModalActive\" title=\"Create a new template\">\n  <div modal-body>\n    <h5>Enter the name of the new template</h5>\n    <div class=\"form-group\">\n      <label for=\"inputName\">Name</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTemplateName\" placeholder=\"Virus scanning - ClamAV\">\n    </div>\n    <button class=\"btn btn-success float-right\" (click)=\"createNewTemplate()\">Create</button>\n  </div>\n</modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/FileBrowser/FileBrowser.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/FileBrowser/FileBrowser.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [class.modal]=\"isModal\" [class.active]=\"active\" id=\"modal\">\n  <div [class.main-modal]=\"isModal\" [class.modal-dialog]=\"isModal\" [class.modal-lg]=\"isModal\" role=\"document\">\n    <div [class.modal-content]=\"isModal\" [class.content]=\"!isModal\">\n      <div [class.modal-header]=\"isModal\">\n        <h5 [class.modal-title]=\"isModal\" id=\"exampleModalLabel\">FileBrowser</h5>\n        <button type=\"button\" class=\"close\" (click)=\"closeModal()\" *ngIf=\"isModal\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"overflow:scroll\">\n        <div *ngFor=\"let level of levels; let i = index\" class=\"level\">\n          <div\n            *ngFor=\"let file of level\"\n            class=\"file\"\n            [class.selected]=\"file.name == selected[i]\"\n            (contextmenu)=\"openContextMenu($event, i, file)\"\n            (click)=\"openNewLevel(i, file)\"\n            >\n            <i class=\"material-icons align-middle\" *ngIf=\"file.type == 'folder'\">folder</i>\n            <i class=\"material-icons align-middle\" *ngIf=\"file.type == 'file'\">insert_drive_file</i>\n            <p class=\"align-middle\">\n              {{file.name}}\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"openUploadModal()\">Upload file</button>\n        <button *ngIf=\"selectedFile != undefined\" type=\"button\" class=\"btn btn-warning\" (click)=\"openRenameModal()\">Rename</button>\n        <button *ngIf=\"selectedFile != undefined\" type=\"button\" class=\"btn btn-danger\" (click)=\"openDeleteModal()\">Delete</button>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeModal()\"  *ngIf=\"isModal\">Close</button>\n      </div>\n    </div>\n\n    <!-- Popup window inside modal -->\n    <div class=\"popUpQuestion modal\" *ngIf=\"innerModalVisible\">\n      <div class=\"modal-dialog modal-dialog-centered\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 *ngIf=\"innerModalType == 'delete'\" class=\"modal-title\">Delete</h5>\n            <h5 *ngIf=\"innerModalType == 'rename'\" class=\"modal-title\">Rename</h5>\n            <h5 *ngIf=\"innerModalType == 'create'\" class=\"modal-title\">Create new folder</h5>\n            <h5 *ngIf=\"innerModalType == 'upload'\" class=\"modal-title\">Upload a file</h5>\n            <button type=\"button\" class=\"close\" (click)=\"closeInnerModal()\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <p *ngIf=\"innerModalType == 'delete'\">\n              Are you sure you want to delete \"{{selectedFile.name}}\"? All it's content will permanently be deleted.\n            </p>\n            <div class=\"form-group\" *ngIf=\"innerModalType == 'rename'\">\n              <label for=\"inputName\">New name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"New file name\" [(ngModel)]=\"innerModalValue\">\n            </div>\n            <div class=\"form-group\" *ngIf=\"innerModalType == 'create'\">\n              <label for=\"inputName\">Folder name</label>\n              <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Folder name\" [(ngModel)]=\"innerModalValue\">\n            </div>\n            <div *ngIf=\"innerModalType == 'upload'\" class=\"custom-file\" id=\"customFile\" lang=\"en\">\n              <input type=\"file\" class=\"custom-file-input\" id=\"exampleInputFile\" (change)=\"onFileSelected($event)\" name=\"import\">\n              <label class=\"custom-file-label\" for=\"exampleInputFile\" >\n                {{innerModalValue}}\n              </label>\n            </div>\n          </div>\n          <div class=\"modal-footer justify-content-between\">\n            <button *ngIf=\"innerModalType == 'delete'\" type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Delete</button>\n            <button *ngIf=\"innerModalType == 'rename'\" type=\"button\" class=\"btn btn-success\" (click)=\"rename()\">Rename</button>\n            <button *ngIf=\"innerModalType == 'create'\" type=\"button\" class=\"btn btn-success\" (click)=\"create()\">Create</button>\n            <button *ngIf=\"innerModalType == 'upload'\" type=\"button\" class=\"btn btn-success\" (click)=\"uploadFile()\">Upload</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"closeInnerModal()\">Cancel</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-background\" (click)=\"closeInnerModal()\"></div>\n    </div>\n  </div>\n  <div [class.modal-background]=\"isModal\" (click)=\"closeModal()\"></div>\n</div>\n\n<div class=\"contextMenu\" *ngIf=\"contextMenuPos.x != -1\" [ngStyle]=\"{'left.px': contextMenuPos.x, 'top.px': contextMenuPos.y}\">\n  <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n    <div class=\"dropdown-header\">\n      <i class=\"material-icons align-middle float-left\" *ngIf=\"selectedFile.type == 'folder'\">folder</i>\n      <i class=\"material-icons align-middle float-left\" *ngIf=\"selectedFile.type == 'file'\">insert_drive_file</i>\n      <p class=\"float-left\">{{selectedFile.name}}</p>\n    </div>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" (click)=\"openRenameModal()\">Rename</a>\n    <a class=\"dropdown-item\" [href]=\"getDownloadPath()\" target=\"_blank\">Download</a>\n    <a class=\"dropdown-item\" (click)=\"openDeleteModal()\">Delete</a>\n    <a class=\"dropdown-item\" (click)=\"openUploadModal()\">upload file</a>\n    <a class=\"dropdown-item\" (click)=\"openCreateFolderModal()\" *ngIf=\"canCreateFolder\">Create folder</a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Message/Message.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Message/Message.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"alert {{type}}\" [@visibilityChanged]=\"visiblityState\" role=\"alert\">\n  <ng-content></ng-content>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Modal/Modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Modal/Modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal active\" *ngIf=\"active\" id=\"modal\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">{{title}}</h5>\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\"[modal-body]\"></ng-content>\n      </div>\n      <div class=\"modal-footer\">\n        <ng-content select=\"[modal-footer]\"></ng-content>\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"close()\">Close</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-background\" (click)=\"close()\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Navbar/Navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Navbar/Navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark navbar-expand-lg fixed-top bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" [routerLink]=\"['/']\">Sydarkivera</a>\n  <!-- <button class=\"navbar-toggler\" type=\"button\" [nav-expand-toggle()]>\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <div class=\"collapse navbar-collapse\">\n  <ul class=\"navbar-nav mr-auto\">\n    <ng-content></ng-content>\n  </ul>\n  <ul class=\"navbar-nav mr-2\">\n    <li class=\"nav-item\" *ngIf=\"!IsAuthenticated\">\n      <a class=\"nav-link\" [routerLink]=\"['/login']\">Sign in</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"IsAuthenticated\">\n      <a class=\"nav-link\" >Welcome, {{username}}</a>\n    </li>\n    <li class=\"nav-item\" *ngIf=\"IsAuthenticated\">\n      <a class=\"nav-link\" (click)=\"signout()\">Sign out</a>\n    </li>\n  </ul>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Dashboard/Dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Dashboard/Dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n\n<!-- To row of important numbers -->\n<div class=\"row numberRow\">\n  <div class=\"col-md-3 col-sm-4 col-xs-6\">\n    <p class=\"numberTitle\">\n      Total Packages:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_packages}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Files:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_files}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Errors:\n    </p>\n    <p class=\"number errors\">\n      {{total_number_of_errors}}\n    </p>\n  </div>\n  <div class=\"col-md-3 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Filesize:\n    </p>\n    <p class=\"number\">\n      {{total_size}}\n    </p>\n  </div>\n</div>\n\n<!-- Line graphs -->\n<div class=\"row  half-graph\">\n  <div class=\"card col-md-6\">\n    <div class=\"card-title\">\n      Number of files\n    </div>\n    <div class=\"card-body\">\n      <combo-chart-component\n        [results]=\"graphDataCount\"\n        xAxis=\"true\"\n        yAxis=\"true\"\n        >\n      </combo-chart-component>\n    </div>\n  </div>\n  <div class=\"card col-md-6\">\n    <div class=\"card-title\">\n      Total size of all files\n    </div>\n    <div class=\"card-body\">\n      <combo-chart-component\n        [results]=\"graphDataSize\"\n        xAxis=\"true\"\n        yAxis=\"true\"\n        >\n      </combo-chart-component>\n    </div>\n  </div>\n</div>\n\n<!-- Pie charts -->\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypes\"\n    [gradient]=\"gradient\"\n    label=\"Filetypes\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypesErrors\"\n    [gradient]=\"gradient\"\n    label=\"Errors per Filetype\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/Package.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/Package.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- PackageWorkflow -->\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <h4>Current workflow: {{package.template_name}}</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\" (drop)=\"onDrop($event)\" (dragover)=\"allowDropTop($event)\">\n        Name\n      </div>\n      <div class=\"list-group list-group-flush\">\n        <ng-template ngFor let-process [ngForOf]=\"getVisibleProcesses()\" let-i=\"index\">\n          <div *ngIf=\"!process.hidden\" draggable=\"true\" (dragstart)=\"dragStart($event, process.process_id, 'process', process.name)\" (drop)=\"onDrop($event)\" (dragover)=\"allowDrop($event, process.order)\" class=\"list-group-item list-group-item-action\" [class.active]=\"process.process_id==selected_process_id\"\n              [class.template]=\"process.type=='placeholder'\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\" (click)=\"selectProcess(process)\">\n                {{process.name}}\n              </p>\n              <i *ngIf=\"i > 0\" class=\"material-icons icon-button\" (click)=\"moveUp(process)\">keyboard_arrow_up</i>\n              <i *ngIf=\"i < getVisibleProcesses().length-1\" class=\"material-icons icon-button\" (click)=\"moveDown(process)\">keyboard_arrow_down</i>\n              <i class=\"material-icons icon-button\" (click)=\"deleteProcess(process)\">delete</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n            <ng-template [ngIf]=\"process.process_id==selected_process_id\">\n              <form *ngIf=\"process.form.length>0\">\n                <div class=\"form-group\" *ngFor=\"let input of process.form\">\n                  <div class=\"form-check\" *ngIf=\"input.type=='checkbox'\">\n                    <input\n                      class=\"form-check-input\"\n                      type=\"checkbox\"\n                      *ngIf=\"input.type=='checkbox'\"\n                      [id]=\"input.identifier\"\n                      [checked]=\"getProcessValue(input.identifier)\"\n                      (change)=\"setProcessValue(input.identifier, $event.target.checked)\"\n                      />\n                    <label class=\"form-check-label\" for=\"{{input.identifier}}\">\n                      {{input.label}}\n                    </label>\n                  </div>\n                  <ng-template [ngIf]=\"input.type=='text'\">\n                    <label for=\"{{input.identifier}}\">{{input.label}}</label>\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      [id]=\"input.identifier\"\n                      placeholder=\"{{input.identifier}}\"\n                      [value]=\"getProcessValue(input.identifier)\"\n                      (change)=\"setProcessValue(input.identifier, $event.target.value)\"\n                      (keyup)=\"setProcessValue(input.identifier, $event.target.value)\"\n                      >\n                  </ng-template>\n                </div>\n                <!-- <label *ngFor=\"let input of process.form\" for=\"{{input.identifier}}\" class=\"input-label\">\n                  {{input.label}}\n                  <input type=\"checkbox\" *ngIf=\"input.type=='checkbox'\" [id]=\"input.identifier\" [checked]=\"process.value[input.identifier]\" (change)=\"setProcessValue(input.identifier, $event.target.checked)\"/>\n                </label> -->\n              </form>\n            </ng-template>\n          </div>\n        </ng-template>\n        <div class=\"emptyList\" *ngIf=\"isListEmpty()\">\n          <p>\n            You have not selected any tools.\n            <br> Select on by either dragging it from the right or pressing the plus (\n            <i class=\"material-icons\">add</i> ) sign\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-6\">\n    <h4>Avaliable Tools</h4>\n    <div class=\"card\">\n      <div class=\"card-header company-table-head\">\n        Name\n      </div>\n      <ng-template ngFor let-module [ngForOf]=\"modules\">\n        <div *ngIf=\"!module.hidden\" class=\"list-group list-group-flush\">\n          <div draggable=\"true\" (dragstart)=\"dragStart($event, module.module_id, 'module', module.name)\" (dragend)=\"onRelease($event)\" class=\"list-group-item list-group-item-action\">\n            <div class=\"d-flex w-100 justify-content-between\">\n              <p style=\"margin-bottom:0;\" class=\"d-flex w-100 noselect\">{{module.name}}</p>\n              <i class=\"material-icons icon-button\" (click)=\"addProcessLast(module.module_id)\">add</i>\n              <i class=\"material-icons drag-handle\">drag_handle</i>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n    <button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\">\n      Start\n      <i class=\"material-icons my-auto align-middle icon-small\">play_arrow</i>\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageDashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageDashboard.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row numberRow\">\n  <div class=\"col-md-4 col-sm-4 col-xs-6\">\n    <p class=\"numberTitle\">\n      Total Files:\n    </p>\n    <p class=\"number\">\n      {{total_number_of_files}}\n    </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-6 divider\">\n    <p class=\"numberTitle\">\n      Total Filesize:\n    </p>\n    <p class=\"number\">\n      {{total_size}}\n    </p>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-xs-6 divider\">\n    <button class=\"btn btn-success browse\" (click)=\"openFileBrowser()\">\n      Browse package\n      <i class=\"material-icons my-auto align-middle\">folder_open</i>\n    </button>\n  </div>\n</div>\n\n<div class=\"progress border border-primary\">\n  <div\n    *ngFor=\"let process of package.processes\"\n    class=\"progress-bar text-dark text-center\"\n    [style.width]=\"process.progress/package.processes.length + '%'\"\n    [class.bg-success]=\"process.status == 'Done'\"\n    [class.bg-danger]=\"process.status == 'Error'\"\n    [class.progress-bar-animated]=\"process.status == 'Running'\"\n    [class.progress-bar-striped]=\"process.status == 'Running'\"\n    >\n  </div>\n</div>\n\n<div class=\"card filetypes\">\n  <ngx-charts-advanced-pie-chart\n    [scheme]=\"colorScheme\"\n    [results]=\"fileTypes\"\n    [gradient]=\"gradient\"\n    label=\"Files\">\n  </ngx-charts-advanced-pie-chart>\n</div>\n\n<app-filebrowser [(active)]=\"browserActive\" [path]=\"browserPath\"></app-filebrowser>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageFiles.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageFiles.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-filebrowser active=\"true\" [path]=\"browserPath\" [isModal]=\"false\"></app-filebrowser>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageHeader.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageHeader.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar>\n  <li class=\"nav-item nav-link dropdown\" [class.show]=\"showDropDown\">\n    <p class=\"navbar-link dropdown-toggle package_title\" (click)=\"showDropDown = !showDropDown\">\n      {{name}}\n    </p>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" [class.show]=\"showDropDown\">\n      <a *ngFor=\"let package of packages\" class=\"dropdown-item\" (click)=\"navigateTo(package.package_id)\">{{package.name}}</a>\n    </div>\n  </li>\n  <li class=\"nav-item\"  routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['dashboard']\">Dashboard</a>\n  </li>\n  <li class=\"nav-item\"  routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['files']\">Files</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\" [class.disabled]=\"status==6\">\n    <a class=\"nav-link\" [routerLink]=\"['template']\" [class.disabled]=\"status==6\">Templates</a>\n  </li>\n  <li *ngIf=\"!active_template\" class=\"nav-item disabled\" tooltip=\"Select any template before you can modify it\" tooltipPlacement=\"bottom\" tooltipOpacity=\"0.8\">\n    <a class=\"nav-link disabled noselect\">Workflow</a>\n  </li>\n  <li *ngIf=\"active_template\" class=\"nav-item\" routerLinkActive=\"active\" [class.disabled]=\"status==6\">\n    <a class=\"nav-link\" [routerLink]=\"['edit']\" [class.disabled]=\"status==6\">Workflow</a>\n  </li>\n  <li class=\"nav-item\" routerLinkActive=\"active\">\n    <a class=\"nav-link\" [routerLink]=\"['status']\">Status</a>\n  </li>\n</navbar>\n\n<message [(active)]=\"messageActive\" type=\"alert-danger\" duration=\"4000\">Package not found, returning to package list</message>\n\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageStatus.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageStatus.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<message [(active)]=\"messageActive\" duration=\"4000\">{{messageText}}</message>\n\n<h4>Package status: {{package.status}}</h4>\n<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Statusbar</th>\n      <th>Duration</th>\n      <th>Status</th>\n      <th>Log</th>\n      <th>\n        Error\n        <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let process of package.processes\">\n      <td class=\"align-middle\">\n        {{process.name}} {{process.hidden ? '(Hidden)' : ''}}\n      </td>\n      <td class=\"align-middle\">\n        <div class=\"progress border border-primary\">\n          <div class=\"progress-bar text-dark text-center\"\n          [class.bg-success]=\"process.status == 'Done'\"\n          [class.bg-danger]=\"process.status == 'Error'\"\n          [class.progress-bar-animated]=\"process.status == 'Running'\"\n          [class.progress-bar-striped]=\"process.status == 'Running'\"\n          [style.width]=\"process.progress + '%'\">{{process.progress}}%</div>\n        </div>\n      </td>\n      <td class=\"align-middle\">{{getDuration(process)}}</td>\n      <td class=\"align-middle\">{{process.status}}</td>\n      <td class=\"align-middle\"><button class=\"btn btn-outline-primary\" (click)=\"showModal(process, 'info_log')\" [disabled]=\"process.log_path == ''\">Open log</button></td>\n      <td class=\"align-middle\" style=\"max-width: 100px\">\n          <button class=\"btn btn-danger\"\n                (click)=\"showModal(process, 'error_log')\"\n                [disabled]=\"process.status != 'Error' && process.errors.length <= 0\"\n                [class.btn-outline-danger]=\"process.errors.length <= 0\">\n                Errors: {{process.errors.length}}\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n<button class=\"btn btn-success float-right\" (click)=\"startWorkflow()\" *ngIf=\"package.status != 'Finished'\">\n  Start\n  <i class=\"material-icons my-auto align-middle icon-small\">play_arrow</i>\n</button>\n<button class=\"btn btn-warning float-right\" (click)=\"finishPackage()\" *ngIf=\"package.status != 'Finished'\">\n  Done\n  <!-- <i class=\"material-icons my-auto align-middle icon-small\">done</i> -->\n</button>\n<button class=\"btn btn-warning float-right\" (click)=\"abortProcess()\">abort/pause</button>\n<button class=\"btn btn-danger float-right\" (click)=\"removePackage()\">\n  Delete\n  <i class=\"material-icons my-auto align-middle icon-small\">delete</i>\n</button>\n\n\n<!-- Modal for logfile display -->\n<modal [(active)]=\"modalactive\" title=\"Complete log\">\n  <div modal-body style=\"margin-bottom: 10px\">\n    <div class=\"loading mx-auto\" *ngIf=\"modalLoading\"></div>\n    <!-- <div *ngIf=\"modalType == 'info'\" [innerHTML]=\"modalData\" style=\"white-space: pre-wrap;\"></div> -->\n    <div class=\"list-group\">\n      <div *ngFor=\"let error of modalData\" class=\"list-group-item list-group-item-action selection-header\">\n        <div class=\" d-flex justify-content-between\" (click)=\"error.expanded = !error.expanded\">\n          <p class=\"\">{{getFilePath(error.file)}}</p>\n          <i *ngIf=\"!error.expanded\" class=\"material-icons my-auto\">keyboard_arrow_right</i>\n          <i *ngIf=\"error.expanded\" class=\"material-icons my-auto\">keyboard_arrow_down</i>\n        </div>\n        <div *ngIf=\"error.expanded\" class=\"selection-header\">\n          <p [innerHTML]=\"sanitizeLog(error.log)\" style=\"white-space: pre-wrap;\">\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</modal>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageTemplate.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageTemplate.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h4>Select a template to set as a startingpoint for this package</h4>\n\n<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let template of templates\" [class.selected]=\"active_template==template.template_id\">\n      <td [class.selected]=\"active_template==template.template_id\">\n        {{template.name}}\n      </td>\n      <td class=\"small-column\" [class.selected]=\"active_template==template.template_id\">\n        <button class=\"btn btn-success\" *ngIf=\"active_template != template.template_id\" [class.btn-warning]=\"active_template != undefined\" (click)=\"selectTemplate(template)\">Select</button>\n        <button class=\"btn btn-success\" (click)=\"selectAndStart(template)\">\n          Start\n          <i class=\"material-icons my-auto align-middle icon-small\">play_arrow</i>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Packages/PackageList.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Packages/PackageList.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n\n<table class=\"table table-striped table-hover\" style=\"background-color: white;\">\n  <thead class=\"company-table-head\">\n    <tr>\n      <th>Name</th>\n      <th>Filename</th>\n      <th>Progress</th>\n      <th>\n        Status\n        <button class=\"refresh\" (click)=\"updateData()\"><i class=\"material-icons\">refresh</i></button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let package of packages\">\n      <td><a [routerLink]=\"[package.package_id]\">{{package.name}}</a></td>\n      <td>({{package.type}}) {{package.file_name}}</td>\n      <td>\n        <div class=\"progress border border-primary\">\n          <div\n            *ngFor=\"let process of package.processes\"\n            class=\"progress-bar text-dark text-center\"\n            [style.width]=\"process.progress/package.processes.length + '%'\"\n            [class.bg-success]=\"process.status == 'Done'\"\n            [class.bg-danger]=\"process.status == 'Error'\"\n            [class.progress-bar-animated]=\"process.status == 'Running'\"\n            [class.progress-bar-striped]=\"process.status == 'Running'\"\n            >\n          </div>\n        </div>\n      </td>\n      <td><a [routerLink]=\"[package.package_id, 'status']\">{{package.status}}</a></td>\n    </tr>\n  </tbody>\n\n</table>\n<div class=\"emptyList\" *ngIf=\"isListEmpty()\"  colspan=\"5\">\n  <p>\n    There are no packages\n    <br> Add pacakges to the packages folder an they will appear here\n  </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Packages/Packages.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Packages/Packages.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <!-- A sidebar with global navigation -->\n    <nav class=\"col-md-2 d-md-block bg-light sidebar\">\n      <div class=\"sidebar-sticky\">\n        <ul class=\"nav flex-column\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"dashboard\">\n                  <i class=\"material-icons\">dashboard</i>\n                  Dashboard\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"packages\">\n                  <i class=\"material-icons\">pages</i>\n                  Packages\n                </a>\n          </li>\n        </ul>\n\n        <h6 *ngIf=\"authClass == 'admin'\" class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n              <span>Admin</span>\n              <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n                <span data-feather=\"plus-circle\"></span>\n              </a>\n            </h6>\n        <ul class=\"nav flex-column mb-2\" *ngIf=\"authClass == 'admin'\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/modules\">\n                  <i class=\"material-icons\">category</i>\n                  Tools\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/global\">\n                  <i class=\"material-icons\">tune</i>\n                  Global Settings\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/templates\">\n                  <i class=\"material-icons\">format_list_numbered</i>\n                  Templates\n                </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link company\" routerLinkActive=\"active\" routerLink=\"admin/images\">\n                  <i class=\"material-icons\">view_list</i>\n                  Docker images\n                </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n\n    <!-- Main window, all content will be located inside <router-outlet> -->\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4 main-view\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<navbar></navbar>\n\n<message [(active)]=\"modalActive\" [type]=\"modalType\">{{modalMessage}}</message>\n\n<h1>Sign in</h1>\n\n<div class=\"card\" style=\"width: 18rem;\">\n  <form class=\"card-body\" (submit)=\"login()\">\n    <!-- <h5 class=\"card-title\">Login</h5> -->\n    <label for=\"username\">Username</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      id=\"username\"\n      placeholder=\"Username\"\n      [(ngModel)]=\"username\"\n      [class.is-invalid]=\"usernameError != ''\"\n      name=\"username\"\n      >\n      <div class=\"invalid-feedback\" *ngIf=\"usernameError != ''\">\n        {{usernameError}}\n      </div>\n    <label for=\"username\">Password</label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      id=\"password\"\n      placeholder=\"Password\"\n      [(ngModel)]=\"password\"\n      [class.is-invalid]=\"passwordError != ''\"\n      name=\"password\"\n      >\n      <div class=\"invalid-feedback\" *ngIf=\"passwordError != ''\">\n        {{passwordError}}\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)=\"login()\">Sign in</button>\n  </form>\n</div>\n<!--\n<form class=\"col-xs-3\">\n  <label for=\"username\">Username</label>\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    id=\"username\"\n    placeholder=\"Username\"\n    [value]=\"username\"\n    >\n  <label for=\"username\">Password</label>\n  <input\n    type=\"password\"\n    class=\"form-control\"\n    id=\"password\"\n    placeholder=\"Password\"\n    [value]=\"password\"\n    >\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form> -->\n\n<!-- <form class=\"form-signin\">\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n        <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n        <div class=\"checkbox\">\n          <label>\n            <input type=\"checkbox\" value=\"remember-me\"> Remember me\n          </label>\n        </div>\n        <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n      </form> -->\n\n<!-- <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n    </div>\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n</form> -->\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Admin/DockerImages/docker-images.component.sass":
/*!*****************************************************************!*\
  !*** ./src/app/Admin/DockerImages/docker-images.component.sass ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.active {\n  background-color: #ddd;\n  border-color: #bc044e;\n}\n\n.active label, .active p, .active i, .active small {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL0FkbWluL0RvY2tlckltYWdlcy9kb2NrZXItaW1hZ2VzLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL2F4ZW51L1Byb2plY3RzL1N5ZGFya2l2ZXJhL0FQUC9Bbmd1bGFyL3NyYy9hcHAvQWRtaW4vRG9ja2VySW1hZ2VzL2RvY2tlci1pbWFnZXMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxZQUFBO0FDSEY7O0FES0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDSSxZQUFBO0VBQ0EseUJBaEJvQjtFQWtCcEIsbUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0E7RUFDSSwwQ0FBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtBQ0ZKOztBRElBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0RGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QUNwREE7RUFDRSxzQkFBQTtFQUNBLHFCRkZzQjtBQ3lEeEI7O0FDdERFO0VBQ0UsV0FBQTtBRHdESiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL0RvY2tlckltYWdlcy9kb2NrZXItaW1hZ2VzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcFxuLy8gICBjb2xvcjogcmVkXG4kY29tcGFueS1jb2xvci1wcmltYXJ5OiAjYmMwNDRlXG5cbmh0bWxcbiAgaGVpZ2h0OiAxMDAlXG5cbi5ub3NlbGVjdFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmVcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZVxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmVcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZVxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmVcbiAgdXNlci1zZWxlY3Q6IG5vbmVcblxuXG4uY29tcGFueS10YWJsZS1oZWFkXG4gICAgYm9yZGVyOiBub25lXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbXBhbnktY29sb3ItcHJpbWFyeVxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5OTlcbiAgICAvKiBjb2xvcjogI2JjMDQ0ZSAqL1xuICAgIGNvbG9yOiAjZWVlXG5cbi50YWJsZVxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKVxuXG5idXR0b25cbiAgJi5idG5cbiAgICBtYXJnaW46IDJweFxuXG4ucmVmcmVzaFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxuICBib3JkZXI6IDBcbiAgY29sb3I6IHdoaXRlXG4gIC8qIG1hcmdpbi1sZWZ0OiA4MHB4ICovXG4gIGZsb2F0OiByaWdodFxuICBjb2xvcjogaW5oZXJpdFxuICBtYXJnaW4tYm90dG9tOiAtMTBweFxuXG4uaWNvbi1idXR0b246aG92ZXJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNVxuICBib3JkZXItcmFkaXVzOiAycHhcbiAgY29sb3I6IHdoaXRlXG5cbi5kcmFnLWhhbmRsZVxuICBjdXJzb3I6IGdyYWJcblxuXG4uY2FyZFxuICBtYXJnaW4tYm90dG9tOiAxMHB4XG5cbi5pY29uLXNtYWxsXG4gIGZvbnQtc2l6ZTogMWVtXG4iLCJodG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubm9zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmNvbXBhbnktdGFibGUtaGVhZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjMDQ0ZTtcbiAgLyogY29sb3I6ICNiYzA0NGUgKi9cbiAgY29sb3I6ICNlZWU7XG59XG5cbi50YWJsZSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuYnV0dG9uLmJ0biB7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ucmVmcmVzaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogbWFyZ2luLWxlZnQ6IDgwcHggKi9cbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59XG5cbi5pY29uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWI1YjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZHJhZy1oYW5kbGUge1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmljb24tc21hbGwge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1jb2xvcjogI2JjMDQ0ZTtcbn1cbi5hY3RpdmUgbGFiZWwsIC5hY3RpdmUgcCwgLmFjdGl2ZSBpLCAuYWN0aXZlIHNtYWxsIHtcbiAgY29sb3I6ICMzMzM7XG59IiwiQGltcG9ydCBzdHlsZXNcblxuLmFjdGl2ZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkXG4gIGJvcmRlci1jb2xvcjogJGNvbXBhbnktY29sb3ItcHJpbWFyeVxuICBsYWJlbCwgcCwgaSwgc21hbGxcbiAgICBjb2xvcjogIzMzM1xuIl19 */");

/***/ }),

/***/ "./src/app/Admin/DockerImages/docker-images.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Admin/DockerImages/docker-images.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminImagesComponent", function() { return AdminImagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AdminImagesComponent = /** @class */ (function () {
    function AdminImagesComponent(apiService) {
        var _this = this;
        this.apiService = apiService;
        this.selectedImage = { id: -1 };
        this.label = '';
        this.name = '';
        this.mountpoint = '';
        this.saveSuccess = false;
        this.fileName = 'Select file...';
        this.fileStatus = 0;
        this.modalactive = false;
        this.newLabel = '';
        this.newPath = '';
        this.modalMessage = false;
        this.uploadDone = 0;
        this.uploadTotal = 0;
        this.modalOther = '';
        this.errorVisible = false;
        this.apiService.getDockerImages()
            .subscribe(function (data) {
            _this.images = data;
        });
    }
    AdminImagesComponent.prototype.selectImage = function (image) {
        this.selectedImage = (image === this.selectedImage) ? { id: -1 } : image;
    };
    AdminImagesComponent.prototype.save = function () {
        var _this = this;
        this.apiService
            .saveDockerImage(this.selectedImage.id, this.selectedImage)
            .subscribe(function (data) {
            _this.saveSuccess = true;
        });
    };
    AdminImagesComponent.prototype.openNewImageModal = function () {
        this.modalactive = true;
        this.fileName = 'Select file...';
        this.newLabel = '';
        this.newPath = '';
    };
    // validate the selected file, if it's a tar accept it, else return error.
    AdminImagesComponent.prototype.fileSelected = function (e) {
        if (e.target.files.length > 0) {
            // check fileFormat
            if (!e.target.files[0].name.endsWith('.tar')) {
                console.error('error, wrong fileType');
                this.fileName = 'Select file...';
                this.fileStatus = 1;
            }
            else {
                this.file = e.target.files[0];
                this.fileName = this.file.name;
                this.fileStatus = 2;
            }
        }
    };
    AdminImagesComponent.prototype.importImage = function () {
        var _this = this;
        // a file is selectd, and the user has pressed upload. Submit the data to the backend.
        if (!this.file.name.endsWith('.tar')) {
            console.error('error, wrong fileType');
            return;
        }
        if (this.newLabel === '') {
            console.error('error, no name specified');
            return;
        }
        this.modalMessage = true;
        var formData = new FormData();
        formData.append('file', this.file, 'import.tar');
        formData.append('label', this.newLabel);
        formData.append('workdir', this.newPath);
        this.apiService.importDockerImage(formData)
            .subscribe(function (data) {
            // if (data.type == 4) {
            //   this.modules = data['body'] as [any];
            // }
            // console.log(data);
            if (data.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.images.push(data.body);
                _this.modalactive = false;
                _this.fileName = 'Select file...';
                _this.label = '';
                _this.modalMessage = false;
                _this.selectedImage = _this.images[_this.images.length - 1];
            }
            else if (data.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                _this.uploadDone = data.loaded;
                _this.uploadTotal = data.total;
            }
            else {
                // this.modalOther = data["body"];
                // console.log(data);
                if ('status' in data) {
                    if (data.status !== 200) {
                        _this.modalOther =
                            "unknown error occured, status: " + data.status;
                    }
                }
            }
        });
    };
    AdminImagesComponent.prototype.deleteImage = function (image) {
        var _this = this;
        if (confirm("Are you sure to delete " + image.label + "\n This action is irreversible")) {
            this.apiService.deleteDockerImage(image.id)
                .subscribe(function (data) {
                _this.images = _this.images.filter(function (item) {
                    if (item.id === image.id) {
                        return false;
                    }
                    return true;
                });
                _this.selectedImage = { id: -1 };
            }, function (error) {
                if (error.status === 409) {
                    _this.errorVisible = true;
                }
            });
        }
    };
    AdminImagesComponent.ctorParameters = function () { return [
        { type: _app_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }
    ]; };
    AdminImagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-images',
            template: __importDefault(__webpack_require__(/*! raw-loader!./docker-images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/DockerImages/docker-images.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./docker-images.component.sass */ "./src/app/Admin/DockerImages/docker-images.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_app_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]])
    ], AdminImagesComponent);
    return AdminImagesComponent;
}());



/***/ }),

/***/ "./src/app/Admin/GlobalVariables/global-variables.component.sass":
/*!***********************************************************************!*\
  !*** ./src/app/Admin/GlobalVariables/global-variables.component.sass ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-label {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL0FkbWluL0dsb2JhbFZhcmlhYmxlcy9nbG9iYWwtdmFyaWFibGVzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9BZG1pbi9HbG9iYWxWYXJpYWJsZXMvZ2xvYmFsLXZhcmlhYmxlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL0dsb2JhbFZhcmlhYmxlcy9nbG9iYWwtdmFyaWFibGVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWxhYmVsXG4gIHdpZHRoOiAxMDAlXG4iLCIuaW5wdXQtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Admin/GlobalVariables/global-variables.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Admin/GlobalVariables/global-variables.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminGlobalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGlobalComponent", function() { return AdminGlobalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AdminGlobalComponent = /** @class */ (function () {
    function AdminGlobalComponent(apiService) {
        this.apiService = apiService;
        this.workdirPath = '';
        this.packagesPath = '';
        this.premisFileName = '';
        this.toolsPath = '';
        this.workdirPathHost = '';
        this.premisTemplatePath = '';
        this.premisEventTemplatePath = '';
        this.messageVisible = false;
    }
    AdminGlobalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService
            .getVariables()
            .subscribe(function (data) {
            // console.log(data)
            // load and set the variables loaded from the backend
            _this.workdirPath = data.work_dir_path;
            _this.packagesPath = data.packages_path;
            _this.premisFileName = data.premis_file_name;
            _this.toolsPath = data.tools_path;
            _this.workdirPathHost = data.work_dir_path_host;
            _this.premisTemplatePath = data.premis_template_path;
            _this.premisEventTemplatePath = data.premis_event_template_path;
        });
    };
    AdminGlobalComponent.prototype.save = function () {
        var _this = this;
        // save the values loaded from the backend with their updates
        var data = {
            work_dir_path: this.workdirPath,
            packages_path: this.packagesPath,
            premis_file_name: this.premisFileName,
            tools_path: this.toolsPath,
            work_dir_path_host: this.workdirPathHost,
            premis_template_path: this.premisTemplatePath,
            premis_event_template_path: this.premisEventTemplatePath
        };
        this.apiService.setVariables(data)
            .subscribe(function (response) {
            // display success message
            _this.messageVisible = true;
        });
    };
    AdminGlobalComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }
    ]; };
    AdminGlobalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-variables',
            template: __importDefault(__webpack_require__(/*! raw-loader!./global-variables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/GlobalVariables/global-variables.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./global-variables.component.sass */ "./src/app/Admin/GlobalVariables/global-variables.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], AdminGlobalComponent);
    return AdminGlobalComponent;
}());



/***/ }),

/***/ "./src/app/Admin/Header/header.component.sass":
/*!****************************************************!*\
  !*** ./src/app/Admin/Header/header.component.sass ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL0hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/Admin/Header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Admin/Header/header.component.ts ***!
  \**************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent() {
    }
    AdminHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.sass */ "./src/app/Admin/Header/header.component.sass")).default]
        })
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "./src/app/Admin/Modules/modules.component.sass":
/*!******************************************************!*\
  !*** ./src/app/Admin/Modules/modules.component.sass ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.input-label {\n  width: 100%;\n}\n\n.Error-text {\n  color: red;\n}\n\n.active {\n  background-color: #ddd;\n  border-color: #bc044e;\n}\n\n.active label, .active p, .active i, .active small {\n  color: #333;\n}\n\ntextarea {\n  width: 100%;\n}\n\n.allow-scroll-beneath-page-end {\n  height: 300px;\n}\n\n.form-row div, .form-row select {\n  margin-right: 5px;\n}\n\n.code_example {\n  background-color: lightgray;\n  padding: 7px;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL0FkbWluL01vZHVsZXMvbW9kdWxlcy5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL0FkbWluL01vZHVsZXMvbW9kdWxlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7QUNIRjs7QURLQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNJLFlBQUE7RUFDQSx5QkFoQm9CO0VBa0JwQixtQkFBQTtFQUNBLFdBQUE7QUNISjs7QURLQTtFQUNJLDBDQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0FDRko7O0FESUE7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBQ3BEQTtFQUNFLFdBQUE7QUR1REY7O0FDckRBO0VBQ0UsVUFBQTtBRHdERjs7QUN0REE7RUFDRSxzQkFBQTtFQUNBLHFCRlJzQjtBQ2lFeEI7O0FDeERFO0VBQ0UsV0FBQTtBRDBESjs7QUN4REE7RUFDRSxXQUFBO0FEMkRGOztBQ3pEQTtFQUNFLGFBQUE7QUQ0REY7O0FDekRFO0VBQ0UsaUJBQUE7QUQ0REo7O0FDMURBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUQ2REYiLCJmaWxlIjoic3JjL2FwcC9BZG1pbi9Nb2R1bGVzL21vZHVsZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwXG4vLyAgIGNvbG9yOiByZWRcbiRjb21wYW55LWNvbG9yLXByaW1hcnk6ICNiYzA0NGVcblxuaHRtbFxuICBoZWlnaHQ6IDEwMCVcblxuLm5vc2VsZWN0XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZVxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZVxuICAtbW96LXVzZXItc2VsZWN0OiBub25lXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZVxuICB1c2VyLXNlbGVjdDogbm9uZVxuXG5cbi5jb21wYW55LXRhYmxlLWhlYWRcbiAgICBib3JkZXI6IG5vbmVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcGFueS1jb2xvci1wcmltYXJ5XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzk5OVxuICAgIC8qIGNvbG9yOiAjYmMwNDRlICovXG4gICAgY29sb3I6ICNlZWVcblxuLnRhYmxlXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpXG5cbmJ1dHRvblxuICAmLmJ0blxuICAgIG1hcmdpbjogMnB4XG5cbi5yZWZyZXNoXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gIGJvcmRlcjogMFxuICBjb2xvcjogd2hpdGVcbiAgLyogbWFyZ2luLWxlZnQ6IDgwcHggKi9cbiAgZmxvYXQ6IHJpZ2h0XG4gIGNvbG9yOiBpbmhlcml0XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4XG5cbi5pY29uLWJ1dHRvbjpob3ZlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1XG4gIGJvcmRlci1yYWRpdXM6IDJweFxuICBjb2xvcjogd2hpdGVcblxuLmRyYWctaGFuZGxlXG4gIGN1cnNvcjogZ3JhYlxuXG5cbi5jYXJkXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcblxuLmljb24tc21hbGxcbiAgZm9udC1zaXplOiAxZW1cbiIsImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29tcGFueS10YWJsZS1oZWFkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmMwNDRlO1xuICAvKiBjb2xvcjogI2JjMDQ0ZSAqL1xuICBjb2xvcjogI2VlZTtcbn1cblxuLnRhYmxlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5idXR0b24uYnRuIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5yZWZyZXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBtYXJnaW4tbGVmdDogODBweCAqL1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmljb24tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kcmFnLWhhbmRsZSB7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbi1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLkVycm9yLXRleHQge1xuICBjb2xvcjogcmVkO1xufVxuXG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLWNvbG9yOiAjYmMwNDRlO1xufVxuLmFjdGl2ZSBsYWJlbCwgLmFjdGl2ZSBwLCAuYWN0aXZlIGksIC5hY3RpdmUgc21hbGwge1xuICBjb2xvcjogIzMzMztcbn1cblxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFsbG93LXNjcm9sbC1iZW5lYXRoLXBhZ2UtZW5kIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmZvcm0tcm93IGRpdiwgLmZvcm0tcm93IHNlbGVjdCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY29kZV9leGFtcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iLCJAaW1wb3J0IHN0eWxlc1xuXG4uaW5wdXQtbGFiZWxcbiAgd2lkdGg6IDEwMCVcblxuLkVycm9yLXRleHRcbiAgY29sb3I6IHJlZFxuXG4uYWN0aXZlXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRcbiAgYm9yZGVyLWNvbG9yOiAkY29tcGFueS1jb2xvci1wcmltYXJ5XG4gIGxhYmVsLCBwLCBpLCBzbWFsbFxuICAgIGNvbG9yOiAjMzMzXG5cbnRleHRhcmVhXG4gIHdpZHRoOiAxMDAlXG5cbi5hbGxvdy1zY3JvbGwtYmVuZWF0aC1wYWdlLWVuZFxuICBoZWlnaHQ6IDMwMHB4XG5cbi5mb3JtLXJvd1xuICBkaXYsIHNlbGVjdFxuICAgIG1hcmdpbi1yaWdodDogNXB4XG5cbi5jb2RlX2V4YW1wbGVcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5XG4gIHBhZGRpbmc6IDdweFxuICBib3JkZXItcmFkaXVzOiA1cHhcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Admin/Modules/modules.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Admin/Modules/modules.component.ts ***!
  \****************************************************/
/*! exports provided: AdminModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModulesComponent", function() { return AdminModulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_Services_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/Services/models */ "./src/app/Services/models.ts");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/api.service */ "./src/app/Services/api.service.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var AdminModulesComponent = /** @class */ (function () {
    function AdminModulesComponent(apiService) {
        this.apiService = apiService;
        this.selectedModule = { module_id: -1 };
        this.title = '';
        this.formJson = '';
        this.formJsonError = '';
        this.commandJsonError = '';
        this.resultFilters = [];
        this.newResultFilter = { type: 'Containing', value: '' };
        this.modalactive = false;
        this.fileName = 'Select file...';
        this.fileStatus = 0;
        this.messageVisible = false;
        this.errorVisible = false;
        this.errorMessage = 'Error';
        this.browserActive = false;
        this.browserPath = '';
        this.docsActive = false;
        this.commandDocsActive = false;
    }
    AdminModulesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load initial data from server, module list
        this.apiService.getModules().subscribe(function (data) {
            _this.modules = data;
            console.log(_this.modules);
        });
        this.apiService.getDockerImages().subscribe(function (data) {
            _this.images = data;
            console.log(_this.images);
        });
    };
    AdminModulesComponent.prototype.setModule = function (mod) {
        // sets the data needed for a module change
        this.selectedModule = JSON.parse(JSON.stringify(mod));
        this.title = this.selectedModule.name;
        // store the jsonfields as string temporarily to allow for
        this.formJson = this.getJson(this.selectedModule.form);
    };
    AdminModulesComponent.prototype.addNewModule = function () {
        // Adding a new module only resets the data in all forms, saving the changes then creates a new module.
        this.selectedModule = { module_id: -2, form: [], type: 'Command', resultFilter: [] };
        this.title = 'New module';
        this.formJson = '[]';
    };
    AdminModulesComponent.prototype.deleteModule = function (dmodule) {
        var _this = this;
        // Before a module can be deleted a confirmation is displayed, warning the user of the risks.
        if (confirm('Are you sure to delete ' +
            dmodule.name +
            '\n This action is irreversible')) {
            this.apiService.deleteModule(dmodule.module_id).subscribe(function (data) {
                _this.modules = _this.modules.filter(function (item) {
                    if (item.module_id == dmodule.module_id) {
                        return false;
                    }
                    return true;
                });
                _this.selectedModule = { module_id: -1 };
            }, function (error) {
                console.log(error);
                if (error.status == 409) {
                    _this.errorVisible = true;
                    _this.errorMessage = error.error;
                    console.log(error.error);
                }
            });
        }
    };
    AdminModulesComponent.prototype.selectModule = function (mod) {
        // if this module isn't selected already, select it. Else deselect.
        if (!this.selectedModule ||
            this.selectedModule.module_id != mod.module_id) {
            this.setModule(mod);
        }
        else {
            this.selectedModule = { module_id: -1 };
        }
    };
    AdminModulesComponent.prototype.getJson = function (data) {
        return JSON.stringify(data, null, 4);
    };
    AdminModulesComponent.prototype.save = function () {
        // Save the changes from the huge form.
        var _this = this;
        // validate form json input
        try {
            this.selectedModule.form = JSON.parse(this.formJson);
            this.formJsonError = '';
        }
        catch (e) {
            console.log('Error', e.message);
            this.formJsonError = e.message;
            return false;
        }
        // only pass the values that are defined to the server.
        var data = new _app_Services_models__WEBPACK_IMPORTED_MODULE_2__["Module"]();
        if (this.selectedModule.name) {
            console.log(data.name, this.selectedModule.name);
            data.name = this.selectedModule.name;
            if (data.name === '') {
                this.commandJsonError = 'Name must be filled in';
                return false;
            }
            else {
                this.commandJsonError = '';
            }
        }
        else {
            this.commandJsonError = 'Name must be filled in';
            return false;
        }
        if (this.selectedModule.hidden != undefined) {
            data.hidden = this.selectedModule.hidden;
        }
        if (this.selectedModule.form != undefined) {
            data.form = this.selectedModule.form;
        }
        if (this.selectedModule.type != undefined) {
            data.type = this.selectedModule.type;
        }
        if (this.selectedModule.command != undefined) {
            data.command = this.selectedModule.command;
        }
        if (this.selectedModule.python_module != undefined) {
            data.python_module = this.selectedModule.python_module;
        }
        if (this.selectedModule.multifile != undefined) {
            data.multifile = this.selectedModule.multifile;
        }
        if (this.selectedModule.filter != undefined) {
            data.filter = this.selectedModule.filter;
        }
        if (this.selectedModule.resultFilter != undefined) {
            data.resultFilter = this.selectedModule.resultFilter;
        }
        else {
            data.resultFilter = '[]';
        }
        if (this.selectedModule.dockerImage != undefined) {
            data.dockerImage = this.selectedModule.dockerImage;
        }
        if (this.selectedModule.description != undefined) {
            data.description = this.selectedModule.description;
        }
        if (this.selectedModule.parallell_jobs != undefined) {
            data.parallell_jobs = this.selectedModule.parallell_jobs;
        }
        // verfiy that the tools action is implemented
        if (this.selectedModule.type == 'Command') {
            if (!this.selectedModule.command ||
                this.selectedModule.command.length <= 0) {
                this.commandJsonError =
                    'to save a new tool, the command needs to be configured';
                return false;
            }
        }
        else if (this.selectedModule.type == 'Python module') {
            if (!this.selectedModule.python_module ||
                this.selectedModule.python_module == '') {
                this.commandJsonError =
                    'to save a new tool, the python file needs to be specified';
                return false;
            }
        }
        else if (this.selectedModule.type === 'Smart docker') {
            if (this.selectedModule.parallell_jobs <= 0 && this.selectedModule.parallell_jobs >= 100) {
                this.commandJsonError =
                    'The value for number of parallell jobs must be between 1 and 100';
                return false;
            }
        }
        this.commandJsonError = '';
        console.log(data);
        // if the id isn't -2, this is an existing module which should be updated
        if (this.selectedModule.module_id != -2 &&
            this.selectedModule.module_id) {
            this.apiService
                .saveData(this.selectedModule.module_id, data)
                .subscribe(function (data) {
                _this.messageVisible = true;
                for (var i in _this.modules) {
                    var m = _this.modules[i];
                    if (m.module_id == data.module_id) {
                        _this.modules[i] = data;
                        _this.setModule(data);
                    }
                }
            });
        }
        else {
            // else this is a new module which has not been saved before.
            delete this.selectedModule.module_id;
            this.apiService.createModule(data).subscribe(function (data) {
                _this.messageVisible = true;
                _this.setModule(data);
                _this.modules.push(data);
                _this.modules = _this.modules.sort(function (a, b) {
                    if (a.name.toUpperCase() > b.name.toUpperCase()) {
                        return 1;
                    }
                    return -1;
                });
            });
        }
    };
    // activate modal for selecting a file to import
    AdminModulesComponent.prototype.importModule = function () {
        this.modalactive = true;
    };
    // validate the selected file, if it's a tar accept it, else return error.
    AdminModulesComponent.prototype.fileSelected = function (e) {
        if (e.target.files.length > 0) {
            // check fileFormat
            if (!e.target.files[0].name.endsWith('.tar')) {
                console.error('error, wrong fileType');
                this.fileName = 'Select file...';
                this.fileStatus = 1;
            }
            else {
                this.file = e.target.files[0];
                this.fileName = this.file.name;
                this.fileStatus = 2;
            }
        }
    };
    AdminModulesComponent.prototype.uploadFile = function () {
        var _this = this;
        // a file is selectd, and the user has pressed upload. Submit the data to the backend.
        if (!this.file.name.endsWith('.tar')) {
            console.error('error, wrong fileType');
            return;
        }
        this.modalactive = false;
        this.fileName = 'Select file...';
        var formData = new FormData();
        formData.append('file', this.file, 'import.tar');
        this.apiService.importModule(formData).subscribe(function (data) {
            if (data.type == _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.modules = data.body;
            }
        });
    };
    AdminModulesComponent.prototype.addResultFilter = function () {
        // add another filter for scanning the log files
        this.selectedModule.resultFilter.push(__assign({}, this.newResultFilter));
        this.newResultFilter = { type: 'Containing', value: '' };
    };
    AdminModulesComponent.prototype.removeResultFilter = function (filter) {
        // remove a filter for scanning the log files
        var index = this.selectedModule.resultFilter.indexOf(filter);
        if (index > -1) {
            this.selectedModule.resultFilter.splice(index, 1);
        }
    };
    AdminModulesComponent.prototype.openFileBrowser = function () {
        this.browserPath =
            '/api/module/' + this.selectedModule.module_id + '/files/';
        this.browserActive = true;
    };
    AdminModulesComponent.prototype.openFormJsonDocs = function () {
        this.docsActive = true;
    };
    AdminModulesComponent.prototype.openModalCommandDocs = function () {
        this.commandDocsActive = true;
    };
    AdminModulesComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] }
    ]; };
    AdminModulesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "admin",
            template: __importDefault(__webpack_require__(/*! raw-loader!./modules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Modules/modules.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./modules.component.sass */ "./src/app/Admin/Modules/modules.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"]])
    ], AdminModulesComponent);
    return AdminModulesComponent;
}());



/***/ }),

/***/ "./src/app/Admin/Templates/Templates.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/Admin/Templates/Templates.component.sass ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.list-group-item.active {\n  background-color: #ddd;\n  border-color: #bc044e;\n}\n\n.list-group-item.active label, .list-group-item.active p, .list-group-item.active i, .list-group-item.active small {\n  color: #333;\n}\n\n.placeholder {\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL0FkbWluL1RlbXBsYXRlcy9UZW1wbGF0ZXMuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvYXhlbnUvUHJvamVjdHMvU3lkYXJraXZlcmEvQVBQL0FuZ3VsYXIvc3JjL2FwcC9BZG1pbi9UZW1wbGF0ZXMvVGVtcGxhdGVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtBQ0hGOztBREtBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0ksWUFBQTtFQUNBLHlCQWhCb0I7RUFrQnBCLG1CQUFBO0VBQ0EsV0FBQTtBQ0hKOztBREtBO0VBQ0ksMENBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7QUNGSjs7QURJQTtFQUNFLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxvQkFBQTtFQUFBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FDcERBO0VBQ0Usc0JBQUE7RUFDQSxxQkZGc0I7QUN5RHhCOztBQ3RERTtFQUNFLFdBQUE7QUR3REo7O0FDdERBO0VBQ0UsWUFBQTtBRHlERiIsImZpbGUiOiJzcmMvYXBwL0FkbWluL1RlbXBsYXRlcy9UZW1wbGF0ZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwXG4vLyAgIGNvbG9yOiByZWRcbiRjb21wYW55LWNvbG9yLXByaW1hcnk6ICNiYzA0NGVcblxuaHRtbFxuICBoZWlnaHQ6IDEwMCVcblxuLm5vc2VsZWN0XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZVxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZVxuICAtbW96LXVzZXItc2VsZWN0OiBub25lXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZVxuICB1c2VyLXNlbGVjdDogbm9uZVxuXG5cbi5jb21wYW55LXRhYmxlLWhlYWRcbiAgICBib3JkZXI6IG5vbmVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcGFueS1jb2xvci1wcmltYXJ5XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzk5OVxuICAgIC8qIGNvbG9yOiAjYmMwNDRlICovXG4gICAgY29sb3I6ICNlZWVcblxuLnRhYmxlXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpXG5cbmJ1dHRvblxuICAmLmJ0blxuICAgIG1hcmdpbjogMnB4XG5cbi5yZWZyZXNoXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gIGJvcmRlcjogMFxuICBjb2xvcjogd2hpdGVcbiAgLyogbWFyZ2luLWxlZnQ6IDgwcHggKi9cbiAgZmxvYXQ6IHJpZ2h0XG4gIGNvbG9yOiBpbmhlcml0XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4XG5cbi5pY29uLWJ1dHRvbjpob3ZlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1XG4gIGJvcmRlci1yYWRpdXM6IDJweFxuICBjb2xvcjogd2hpdGVcblxuLmRyYWctaGFuZGxlXG4gIGN1cnNvcjogZ3JhYlxuXG5cbi5jYXJkXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcblxuLmljb24tc21hbGxcbiAgZm9udC1zaXplOiAxZW1cbiIsImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29tcGFueS10YWJsZS1oZWFkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmMwNDRlO1xuICAvKiBjb2xvcjogI2JjMDQ0ZSAqL1xuICBjb2xvcjogI2VlZTtcbn1cblxuLnRhYmxlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5idXR0b24uYnRuIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5yZWZyZXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBtYXJnaW4tbGVmdDogODBweCAqL1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmljb24tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kcmFnLWhhbmRsZSB7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbi1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIGJvcmRlci1jb2xvcjogI2JjMDQ0ZTtcbn1cbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIGxhYmVsLCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSBwLCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSBpLCAubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSBzbWFsbCB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwLjQ7XG59IiwiQGltcG9ydCBzdHlsZXNcblxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmVcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZFxuICBib3JkZXItY29sb3I6ICRjb21wYW55LWNvbG9yLXByaW1hcnlcbiAgbGFiZWwsIHAsIGksIHNtYWxsXG4gICAgY29sb3I6ICMzMzNcblxuLnBsYWNlaG9sZGVyXG4gIG9wYWNpdHk6IDAuNFxuIl19 */");

/***/ }),

/***/ "./src/app/Admin/Templates/templates.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Admin/Templates/templates.component.ts ***!
  \********************************************************/
/*! exports provided: AdminTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTemplatesComponent", function() { return AdminTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AdminTemplatesComponent = /** @class */ (function () {
    function AdminTemplatesComponent(apiService) {
        this.apiService = apiService;
        this.selected_template_id = -1;
        this.selected_template = undefined;
        this.selected_process_id = -1;
        this.selected_process = undefined;
        this.placeholderName = '';
        this.createModalActive = false;
        this.newTemplateName = '';
        this.messageVisible = false;
        this.errorVisible = false;
    }
    // load templates and modules at init
    AdminTemplatesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getTemplates().subscribe(function (data) {
            _this.templates = data;
        });
        this.apiService.getModules().subscribe(function (data) {
            _this.modules = data;
        });
    };
    AdminTemplatesComponent.prototype.createTemplateModal = function () {
        // Activate modal for creation of a new template
        this.createModalActive = true;
        this.newTemplateName = '';
    };
    AdminTemplatesComponent.prototype.createNewTemplate = function () {
        var _this = this;
        // actuall creation of new template
        var data = { templateName: this.newTemplateName };
        this.apiService.postTemplate(data).subscribe(function (data) {
            // console.log(data);
            _this.templates.push(data);
            _this.newTemplateName = '';
            _this.createModalActive = false;
        });
    };
    AdminTemplatesComponent.prototype.save = function () {
        var _this = this;
        // save the changes made in a template to the server
        var data = {
            templateName: this.selected_template.name,
            template_id: this.selected_template_id
        };
        this.apiService.postTemplate(data).subscribe(function (data) {
            _this.messageVisible = true;
            for (var i in _this.templates) {
                var temp = _this.templates[i];
                if (temp.template_id == _this.selected_template_id) {
                    _this.templates[i].name = _this.selected_template.name;
                }
            }
        });
    };
    // delete a template
    AdminTemplatesComponent.prototype.deleteTemplate = function (template) {
        var _this = this;
        if (confirm('Are you sure to delete "' +
            template.name +
            '"\n This action is irreversible')) {
            this.apiService.deleteTemplate(template.template_id).subscribe(function (data) {
                // console.log(data);
                _this.templates = _this.templates.filter(function (item) {
                    if (item.template_id == template.template_id) {
                        return false;
                    }
                    return true;
                });
                _this.selected_process = undefined;
                _this.selected_process_id = -1;
            }, function (error) {
                console.log(error);
                if (error.status == 409) {
                    console.log('409 error, display error message');
                    _this.errorVisible = true;
                }
            });
        }
    };
    // select a template. If it is already selected, unselect it
    AdminTemplatesComponent.prototype.selectTemplate = function (template) {
        var _this = this;
        if (this.selected_template_id != template.template_id) {
            this.selected_template_id = template.template_id;
            this.selected_template = template;
            // Download template data
            this.apiService.getTemplate(this.selected_template_id).subscribe(function (data) {
                _this.selected_template = data;
                console.log(data);
            });
        }
        else {
            this.selected_template_id = -1;
            this.selected_template = undefined;
        }
    };
    // select a process. If it is already selected, unselect it
    AdminTemplatesComponent.prototype.selectProcess = function (process) {
        if (this.selected_process_id != process.process_id) {
            this.selected_process = process;
            this.selected_process_id = process.process_id;
        }
        else {
            this.selected_process = undefined;
            this.selected_process_id = -1;
        }
    };
    // update a value for one of the processes (it's form value)
    AdminTemplatesComponent.prototype.setProcessValue = function (id, value) {
        var values = this.selected_process.value;
        values[id] = value;
        var data = { value: values };
        this.apiService
            .saveProcess(data, this.selected_process_id)
            .subscribe(function (data) {
            // console.log('data chagned')
            // console.log(data);
        });
    };
    // get a process value. use default if none are set
    AdminTemplatesComponent.prototype.getProcessValue = function (id) {
        var values = this.selected_process.value;
        if (id in values) {
            return values[id];
        }
        var form = this.selected_process.form;
        for (var i in form) {
            if (form[i].identifier == id) {
                if ('default' in form[i]) {
                    return form[i].default;
                }
            }
        }
        return '';
    };
    // Delete a process
    AdminTemplatesComponent.prototype.deleteProcess = function (process) {
        this.apiService.deleteProcess(process.process_id).subscribe(function (data) { });
        this.selected_template.processes = this.selected_template.processes.filter(function (item) {
            return item.process_id != process.process_id;
        });
        // move up all processes below
        var data = [];
        for (var index in this.selected_template.processes) {
            var item = this.selected_template.processes[index];
            if (item.type != 'placeholder' && item.order > process.order) {
                item.order -= 1;
                data.push({ order: item.order, process_id: item.process_id });
            }
        }
        this.apiService
            .reorderTemplateProcesses(data, this.selected_template_id)
            .subscribe(function (data) {
            // console.log(data);
        });
        // update the visuals
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // Simply add a process to the bottom of the list
    AdminTemplatesComponent.prototype.addProcessLast = function (module_id) {
        var _this = this;
        var order = 0;
        if (this.selected_template.processes.length > 0) {
            order =
                this.selected_template.processes[this.selected_template.processes.length - 1].order + 1;
        }
        this.apiService
            .addProcess({
            order: order,
            module: module_id,
            template: this.selected_template_id
        })
            .subscribe(function (data) {
            _this.selected_template.processes = data;
        });
    };
    // ---------------- (( Dragging)) ---------------- //
    AdminTemplatesComponent.prototype.moveUp = function (process) {
        var data = [];
        data.push({ order: process.order - 1, process_id: process.process_id });
        // swap places of process and the one above
        for (var i = 0; i < this.selected_template.processes.length; i++) {
            var p = this.selected_template.processes[i];
            if (p.order == process.order - 1) {
                data.push({ order: p.order + 1, process_id: p.process_id });
                // console.log(i);/
                this.selected_template.processes[i].order += 1;
                this.selected_template.processes[i + 1].order -= 1;
                break;
            }
        }
        this.apiService
            .reorderTemplateProcesses(data, this.selected_template_id)
            .subscribe(function (data) {
            // console.log(data);
        });
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminTemplatesComponent.prototype.moveDown = function (process) {
        var data = [];
        data.push({ order: process.order + 1, process_id: process.process_id });
        // swap places of process and the one below
        for (var i = 0; i < this.selected_template.processes.length; i++) {
            var p = this.selected_template.processes[i];
            if (p.order == process.order + 1) {
                data.push({ order: p.order - 1, process_id: p.process_id });
                this.selected_template.processes[i].order -= 1;
                this.selected_template.processes[i - 1].order += 1;
                break;
            }
        }
        this.apiService
            .reorderTemplateProcesses(data, this.selected_template_id)
            .subscribe(function (data) {
            // console.log(data);
        });
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // store the data of the dragged object in the event
    AdminTemplatesComponent.prototype.dragStart = function (e, id, type, name) {
        e.dataTransfer.setData('id', id);
        e.dataTransfer.setData('type', type);
        e.dataTransfer.setData('name', name);
        this.placeholderName = name;
    };
    AdminTemplatesComponent.prototype.onDrop = function (e) {
        var _this = this;
        // calculate the new order for the dropped element
        var dropOrder = Math.ceil(this.placeholderLocation);
        if (dropOrder < 0) {
            dropOrder = 0;
        }
        // if the dropped element is a module, add it
        if (e.dataTransfer.getData('type') == 'module') {
            var data = [];
            // move down all items under existingIndex
            for (var index in this.selected_template.processes) {
                var item = this.selected_template.processes[index];
                // console.log(this.package.processes[index]);
                if (item.type != 'placeholder' && item.order >= dropOrder) {
                    item.order += 1;
                    data.push({ order: item.order, process_id: item.process_id }); // updates to push to backend
                }
            }
            // submit reorder:
            this.apiService
                .reorderTemplateProcesses(data, this.selected_template_id)
                .subscribe(function (data) {
                // console.log(data);
            });
            // add process temporarily until the request is completed
            var newProcess = {
                order: dropOrder,
                process_id: 100,
                module: e.dataTransfer.getData('id'),
                name: e.dataTransfer.getData('name')
            };
            this.selected_template.processes.splice(dropOrder, 0, newProcess);
            this.apiService
                .addProcess({
                order: dropOrder,
                module: e.dataTransfer.getData('id'),
                template: this.selected_template_id
            })
                .subscribe(function (data) {
                _this.selected_template.processes = data;
                _this.selected_process = undefined;
                _this.selected_process_id = -1;
            });
        }
        else {
            // else if the dropped element is a process, reorder the elements in the list
            var startOrder = -1;
            var movedProcessIndex = void 0;
            var data = [];
            for (var index in this.selected_template.processes) {
                var item = this.selected_template.processes[index];
                if (item.process_id == e.dataTransfer.getData('id')) {
                    startOrder = item.order;
                    movedProcessIndex = index;
                }
            }
            if (startOrder > dropOrder) {
                // the item was dragged up. items from dropOrder to startOrder should be moved down.
                for (var index in this.selected_template.processes) {
                    var item = this.selected_template.processes[index];
                    if (item.type != 'placeholder' &&
                        item.order < startOrder &&
                        item.order >= dropOrder) {
                        item.order += 1;
                        data.push({ order: item.order, process_id: item.process_id });
                    }
                }
                this.selected_template.processes[movedProcessIndex].order = dropOrder;
                data.push({
                    order: this.selected_template.processes[movedProcessIndex].order,
                    process_id: this.selected_template.processes[movedProcessIndex]
                        .process_id
                });
            }
            else {
                // the item was dragged down. items smaller than startOrder and larger than dropOrder shall be moved up.
                for (var index in this.selected_template.processes) {
                    var item = this.selected_template.processes[index];
                    if (item.type != 'placeholder' &&
                        item.order > startOrder &&
                        item.order < dropOrder) {
                        item.order -= 1;
                        data.push({ order: item.order, process_id: item.process_id });
                    }
                }
                this.selected_template.processes[movedProcessIndex].order =
                    dropOrder - 1;
                data.push({
                    order: this.selected_template.processes[movedProcessIndex].order,
                    process_id: this.selected_template.processes[movedProcessIndex]
                        .process_id
                });
            }
            // push changes to api
            this.apiService
                .reorderTemplateProcesses(data, this.selected_template_id)
                .subscribe(function (data) {
                // console.log(data);
            });
            this.onRelease(undefined);
            this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
                if (a.order > b.order) {
                    return 1;
                }
                return -1;
            });
        }
    };
    AdminTemplatesComponent.prototype.onRelease = function (e) {
        // remove the placeholder
        this.selected_template.processes = this.selected_template.processes.filter(function (item) {
            return item.type != 'placeholder';
        });
    };
    AdminTemplatesComponent.prototype.allowDrop = function (e, index) {
        // set ghost image to show where you will drop.
        e.preventDefault();
        var element = e.target;
        if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
            return;
        }
        if (e.pageY - element.getBoundingClientRect().top >
            element.offsetHeight * 0.5) {
            // drop below elements
            var ind = index + 0.5;
            if (ind != this.placeholderLocation) {
                this.placeholderLocation = ind;
                this.onRelease(undefined);
                var temp = {
                    type: 'placeholder',
                    order: ind,
                    name: this.placeholderName
                };
                this.selected_template.processes.splice(index + 1, 0, temp);
            }
        }
        else {
            // drop above element.
            var ind = index - 0.5;
            if (ind != this.placeholderLocation) {
                this.placeholderLocation = ind;
                this.onRelease(undefined);
                console.log(e.dataTransfer.getData('name'));
                var temp = {
                    type: 'placeholder',
                    order: ind,
                    name: this.placeholderName
                };
                this.selected_template.processes.splice(index, 0, temp);
            }
        }
        this.placeholderTemplate = this.selected_template_id;
    };
    AdminTemplatesComponent.prototype.allowDropTop = function (e) {
        // create a placeholder at the correct place
        e.preventDefault();
        // calculate order. Order will be 0.5 lower than first visible.
        var order = -0.5;
        this.placeholderLocation = order;
        this.placeholderTemplate = this.selected_template_id;
        this.onRelease(undefined);
        var temp = {
            type: 'placeholder',
            order: order,
            name: this.placeholderName
        };
        this.selected_template.processes.push(temp);
        this.selected_template.processes = this.selected_template.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    AdminTemplatesComponent.ctorParameters = function () { return [
        { type: _app_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }
    ]; };
    AdminTemplatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-templates',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Templates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Admin/Templates/Templates.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./Templates.component.sass */ "./src/app/Admin/Templates/Templates.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_app_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], AdminTemplatesComponent);
    return AdminTemplatesComponent;
}());



/***/ }),

/***/ "./src/app/Admin/admin-routing.routes.ts":
/*!***********************************************!*\
  !*** ./src/app/Admin/admin-routing.routes.ts ***!
  \***********************************************/
/*! exports provided: adminRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminRoutes", function() { return adminRoutes; });
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _DockerImages_docker_images_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DockerImages/docker-images.component */ "./src/app/Admin/DockerImages/docker-images.component.ts");
/* harmony import */ var _GlobalVariables_global_variables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalVariables/global-variables.component */ "./src/app/Admin/GlobalVariables/global-variables.component.ts");
/* harmony import */ var _Header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header/header.component */ "./src/app/Admin/Header/header.component.ts");
/* harmony import */ var _Modules_modules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/modules.component */ "./src/app/Admin/Modules/modules.component.ts");
/* harmony import */ var _Templates_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Templates/templates.component */ "./src/app/Admin/Templates/templates.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// Components





var adminRoutes = [
    { path: 'admin', component: _Header_header_component__WEBPACK_IMPORTED_MODULE_4__["AdminHeaderComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_0__["AdminGuard"]], children: [
            { path: '', redirectTo: 'modules', pathMatch: 'full' },
            { path: 'modules', component: _Modules_modules_component__WEBPACK_IMPORTED_MODULE_5__["AdminModulesComponent"] },
            { path: 'global', component: _GlobalVariables_global_variables_component__WEBPACK_IMPORTED_MODULE_3__["AdminGlobalComponent"] },
            { path: 'templates', component: _Templates_templates_component__WEBPACK_IMPORTED_MODULE_6__["AdminTemplatesComponent"] },
            { path: 'images', component: _DockerImages_docker_images_component__WEBPACK_IMPORTED_MODULE_2__["AdminImagesComponent"] }
        ] }
];


/***/ }),

/***/ "./src/app/Admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/Admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _Components_FileBrowser_FileBrowser_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/FileBrowser/FileBrowser.module */ "./src/app/Components/FileBrowser/FileBrowser.module.ts");
/* harmony import */ var _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _Components_Modal_Modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Modal/Modal.module */ "./src/app/Components/Modal/Modal.module.ts");
/* harmony import */ var _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/Navbar/Navbar.module */ "./src/app/Components/Navbar/Navbar.module.ts");
/* harmony import */ var _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/Tooltip/Tooltip.module */ "./src/app/Components/Tooltip/Tooltip.module.ts");
/* harmony import */ var _DockerImages_docker_images_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DockerImages/docker-images.component */ "./src/app/Admin/DockerImages/docker-images.component.ts");
/* harmony import */ var _GlobalVariables_global_variables_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GlobalVariables/global-variables.component */ "./src/app/Admin/GlobalVariables/global-variables.component.ts");
/* harmony import */ var _Header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header/header.component */ "./src/app/Admin/Header/header.component.ts");
/* harmony import */ var _Modules_modules_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Modules/modules.component */ "./src/app/Admin/Modules/modules.component.ts");
/* harmony import */ var _Templates_templates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Templates/templates.component */ "./src/app/Admin/Templates/templates.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// imports





// declarations





// providers
// import { ModuleService } from './Module.service';

var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_9__["TooltipModule"],
                _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
                _Components_Modal_Modal_module__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
                _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_6__["MessageModule"],
                _Components_FileBrowser_FileBrowser_module__WEBPACK_IMPORTED_MODULE_5__["FileBrowserModule"]
            ],
            declarations: [
                _Header_header_component__WEBPACK_IMPORTED_MODULE_12__["AdminHeaderComponent"],
                _Modules_modules_component__WEBPACK_IMPORTED_MODULE_13__["AdminModulesComponent"],
                _GlobalVariables_global_variables_component__WEBPACK_IMPORTED_MODULE_11__["AdminGlobalComponent"],
                _Templates_templates_component__WEBPACK_IMPORTED_MODULE_14__["AdminTemplatesComponent"],
                _DockerImages_docker_images_component__WEBPACK_IMPORTED_MODULE_10__["AdminImagesComponent"]
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_15__["APIService"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/Components/FileBrowser/FileBrowser.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/Components/FileBrowser/FileBrowser.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.modal.active {\n  display: block !important;\n}\n\n.main-modal.modal-dialog, .main-modal .modal-content {\n  height: 95%;\n}\n\n.modal-body {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  padding: 0;\n  overflow: hidden;\n  height: calc(100vh - 150px);\n}\n\n.modal-body .level {\n  float: left;\n  height: 100%;\n  border-right: 1px solid #e9ecef;\n  padding-left: 10px;\n  overflow: scroll;\n  padding-bottom: 20px;\n}\n\n.modal-body .level .file {\n  clear: both;\n  flex-wrap: nowrap;\n  display: flex;\n  padding-left: 10px;\n  align-items: center;\n}\n\n.modal-body .level .file p {\n  white-space: nowrap;\n  float: left;\n  vertical-align: middle;\n  margin: 5px;\n}\n\n.modal-body .level .file i {\n  float: left;\n  color: rgba(188, 4, 78, 0.5);\n}\n\n.modal-body .level .file.selected {\n  background-color: #bc044e;\n}\n\n.modal-body .level .file.selected p, .modal-body .level .file.selected i {\n  color: white;\n}\n\n.modal-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: -1;\n}\n\n.contextMenu {\n  position: fixed;\n  z-index: 10000;\n}\n\n.contextMenu .dropdown-menu {\n  display: block;\n}\n\n.contextMenu .dropdown-menu .dropdown-header {\n  padding: 0;\n  padding-left: 10px;\n  padding-top: 5px;\n}\n\n.contextMenu .dropdown-menu .dropdown-header p {\n  margin-left: 5px;\n}\n\n.contextMenu .dropdown-menu .dropdown-divider {\n  clear: both;\n}\n\n.popUpQuestion {\n  display: block;\n}\n\n.popUpQuestion .modal-body {\n  padding: 10px;\n}\n\n.modal-footer, .modal-header {\n  flex: 0;\n  flex-shrink: 0;\n}\n\n.modal-footer {\n  position: fixed;\n  bottom: 0;\n  flex: 1;\n  left: 0;\n  width: 100%;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvRmlsZUJyb3dzZXIvRmlsZUJyb3dzZXIuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvYXhlbnUvUHJvamVjdHMvU3lkYXJraXZlcmEvQVBQL0FuZ3VsYXIvc3JjL2FwcC9Db21wb25lbnRzL0ZpbGVCcm93c2VyL0ZpbGVCcm93c2VyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtBQ0hGOztBREtBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0ksWUFBQTtFQUNBLHlCQWhCb0I7RUFrQnBCLG1CQUFBO0VBQ0EsV0FBQTtBQ0hKOztBREtBO0VBQ0ksMENBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7QUNGSjs7QURJQTtFQUNFLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxvQkFBQTtFQUFBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FDcERBO0VBQ0UseUJBQUE7QUR1REY7O0FDcERFO0VBQ0UsV0FBQTtBRHVESjs7QUNwREE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUVBLDJCQUFBO0FEb0RGOztBQ2hERTtFQUNFLFdBQUE7RUFHQSxZQUFBO0VBR0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUQ4Q0o7O0FDNUNJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUQ4Q047O0FDNUNNO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEOENSOztBQzVDTTtFQUNFLFdBQUE7RUFDQSw0QkFBQTtBRDhDUjs7QUM1Q007RUFDRSx5QkZuRGdCO0FDaUd4Qjs7QUM3Q1E7RUFDRSxZQUFBO0FEK0NWOztBQzVDQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBRCtDRjs7QUM1Q0E7RUFHRSxlQUFBO0VBRUEsY0FBQTtBRDRDRjs7QUMxQ0U7RUFDRSxjQUFBO0FENENKOztBQzFDSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FENENOOztBQzFDTTtFQUNFLGdCQUFBO0FENENSOztBQzFDSTtFQUNFLFdBQUE7QUQ0Q047O0FDekNBO0VBQ0UsY0FBQTtBRDRDRjs7QUMxQ0U7RUFDRSxhQUFBO0FENENKOztBQzFDQTtFQUNFLE9BQUE7RUFDQSxjQUFBO0FENkNGOztBQzNDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUQ4Q0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL0ZpbGVCcm93c2VyL0ZpbGVCcm93c2VyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcFxuLy8gICBjb2xvcjogcmVkXG4kY29tcGFueS1jb2xvci1wcmltYXJ5OiAjYmMwNDRlXG5cbmh0bWxcbiAgaGVpZ2h0OiAxMDAlXG5cbi5ub3NlbGVjdFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmVcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZVxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmVcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZVxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmVcbiAgdXNlci1zZWxlY3Q6IG5vbmVcblxuXG4uY29tcGFueS10YWJsZS1oZWFkXG4gICAgYm9yZGVyOiBub25lXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbXBhbnktY29sb3ItcHJpbWFyeVxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5OTlcbiAgICAvKiBjb2xvcjogI2JjMDQ0ZSAqL1xuICAgIGNvbG9yOiAjZWVlXG5cbi50YWJsZVxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKVxuXG5idXR0b25cbiAgJi5idG5cbiAgICBtYXJnaW46IDJweFxuXG4ucmVmcmVzaFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxuICBib3JkZXI6IDBcbiAgY29sb3I6IHdoaXRlXG4gIC8qIG1hcmdpbi1sZWZ0OiA4MHB4ICovXG4gIGZsb2F0OiByaWdodFxuICBjb2xvcjogaW5oZXJpdFxuICBtYXJnaW4tYm90dG9tOiAtMTBweFxuXG4uaWNvbi1idXR0b246aG92ZXJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNVxuICBib3JkZXItcmFkaXVzOiAycHhcbiAgY29sb3I6IHdoaXRlXG5cbi5kcmFnLWhhbmRsZVxuICBjdXJzb3I6IGdyYWJcblxuXG4uY2FyZFxuICBtYXJnaW4tYm90dG9tOiAxMHB4XG5cbi5pY29uLXNtYWxsXG4gIGZvbnQtc2l6ZTogMWVtXG4iLCJodG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubm9zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmNvbXBhbnktdGFibGUtaGVhZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjMDQ0ZTtcbiAgLyogY29sb3I6ICNiYzA0NGUgKi9cbiAgY29sb3I6ICNlZWU7XG59XG5cbi50YWJsZSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuYnV0dG9uLmJ0biB7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ucmVmcmVzaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogbWFyZ2luLWxlZnQ6IDgwcHggKi9cbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59XG5cbi5pY29uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWI1YjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZHJhZy1oYW5kbGUge1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmljb24tc21hbGwge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLm1vZGFsLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLW1vZGFsLm1vZGFsLWRpYWxvZywgLm1haW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDk1JTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTUwcHgpO1xufVxuLm1vZGFsLWJvZHkgLmxldmVsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U5ZWNlZjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5tb2RhbC1ib2R5IC5sZXZlbCAuZmlsZSB7XG4gIGNsZWFyOiBib3RoO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWJvZHkgLmxldmVsIC5maWxlIHAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmbG9hdDogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luOiA1cHg7XG59XG4ubW9kYWwtYm9keSAubGV2ZWwgLmZpbGUgaSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogcmdiYSgxODgsIDQsIDc4LCAwLjUpO1xufVxuLm1vZGFsLWJvZHkgLmxldmVsIC5maWxlLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjMDQ0ZTtcbn1cbi5tb2RhbC1ib2R5IC5sZXZlbCAuZmlsZS5zZWxlY3RlZCBwLCAubW9kYWwtYm9keSAubGV2ZWwgLmZpbGUuc2VsZWN0ZWQgaSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC43NTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5jb250ZXh0TWVudSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDA7XG59XG4uY29udGV4dE1lbnUgLmRyb3Bkb3duLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jb250ZXh0TWVudSAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24taGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmNvbnRleHRNZW51IC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1oZWFkZXIgcCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uY29udGV4dE1lbnUgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWRpdmlkZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnBvcFVwUXVlc3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wb3BVcFF1ZXN0aW9uIC5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1vZGFsLWZvb3RlciwgLm1vZGFsLWhlYWRlciB7XG4gIGZsZXg6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGZsZXg6IDE7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iLCJAaW1wb3J0IC4uLy4uLy4uL3N0eWxlc1xuXG4ubW9kYWwuYWN0aXZlXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnRcblxuLm1haW4tbW9kYWxcbiAgJi5tb2RhbC1kaWFsb2csIC5tb2RhbC1jb250ZW50XG4gICAgaGVpZ2h0OiA5NSVcblxuXG4ubW9kYWwtYm9keVxuICAvLyBvdmVyZmxvdy14OiBhdXRvXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1kaXJlY3Rpb246IHJvd1xuICBmbGV4LXdyYXA6IG5vd3JhcFxuICBwYWRkaW5nOiAwXG4gIC8vIG92ZXJmbG93OiBhdXRvXG4gIG92ZXJmbG93OiBoaWRkZW5cbiAgLy8gbWF4LWhlaWdodDogMTAlXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDE1MHB4KVxuXG5cblxuICAubGV2ZWxcbiAgICBmbG9hdDogbGVmdFxuICAgIC8vIHdpZHRoOiAyMDBweFxuICAgIC8vIG1pbi13aWR0aDogMjAwcHhcbiAgICBoZWlnaHQ6IDEwMCVcbiAgICAvLyBvdmVyZmxvdy15OiBhdXRvXG4gICAgLy8gb3ZlcmZsb3cteDogaGlkZGVuXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U5ZWNlZlxuICAgIHBhZGRpbmctbGVmdDogMTBweFxuICAgIG92ZXJmbG93OiBzY3JvbGxcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweFxuXG4gICAgLmZpbGVcbiAgICAgIGNsZWFyOiBib3RoXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcFxuICAgICAgZGlzcGxheTogZmxleFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyXG5cbiAgICAgIHBcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxuICAgICAgICBmbG9hdDogbGVmdFxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgICAgIG1hcmdpbjogNXB4XG5cbiAgICAgIGlcbiAgICAgICAgZmxvYXQ6IGxlZnRcbiAgICAgICAgY29sb3I6IHJnYmEoJGNvbXBhbnktY29sb3ItcHJpbWFyeSwgMC41KVxuXG4gICAgICAmLnNlbGVjdGVkXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wYW55LWNvbG9yLXByaW1hcnlcbiAgICAgICAgcCwgaVxuICAgICAgICAgIGNvbG9yOiB3aGl0ZVxuXG5cbi5tb2RhbC1iYWNrZ3JvdW5kXG4gIHBvc2l0aW9uOiBmaXhlZFxuICB0b3A6IDBcbiAgcmlnaHQ6IDBcbiAgYm90dG9tOiAwXG4gIGxlZnQ6IDBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMFxuICBvcGFjaXR5OiAwLjc1XG4gIHotaW5kZXg6IC0xXG5cblxuLmNvbnRleHRNZW51XG4gIC8vIHdpZHRoOiAxMDBweFxuICAvLyBoZWlnaHQ6IDEwMHB4XG4gIHBvc2l0aW9uOiBmaXhlZFxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWRcbiAgei1pbmRleDogMTAwMDBcblxuICAuZHJvcGRvd24tbWVudVxuICAgIGRpc3BsYXk6IGJsb2NrXG5cbiAgICAuZHJvcGRvd24taGVhZGVyXG4gICAgICBwYWRkaW5nOiAwXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHhcbiAgICAgIHBhZGRpbmctdG9wOiA1cHhcblxuICAgICAgcFxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4XG5cbiAgICAuZHJvcGRvd24tZGl2aWRlclxuICAgICAgY2xlYXI6IGJvdGhcblxuXG4ucG9wVXBRdWVzdGlvblxuICBkaXNwbGF5OiBibG9ja1xuXG4gIC5tb2RhbC1ib2R5XG4gICAgcGFkZGluZzogMTBweFxuXG4ubW9kYWwtZm9vdGVyLCAubW9kYWwtaGVhZGVyXG4gIGZsZXg6IDBcbiAgZmxleC1zaHJpbms6IDBcblxuLm1vZGFsLWZvb3RlclxuICBwb3NpdGlvbjogZml4ZWRcbiAgYm90dG9tOiAwXG4gIGZsZXg6IDFcbiAgbGVmdDogMFxuICB3aWR0aDogMTAwJVxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxuIl19 */");

/***/ }),

/***/ "./src/app/Components/FileBrowser/FileBrowser.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/FileBrowser/FileBrowser.component.ts ***!
  \*****************************************************************/
/*! exports provided: FileBrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserComponent", function() { return FileBrowserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var FileBrowserComponent = /** @class */ (function () {
    function FileBrowserComponent(apiService) {
        this.apiService = apiService;
        this.canCreateFolder = true;
        this.isModal = true;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedFiles = undefined;
        this.levels = [[]];
        this.fullPath = [];
        this.selectedLevel = -1;
        this.selectedFile = undefined;
        this.selected = [];
        this.contextMenuPos = { x: -1, y: -1 };
        this.innerModalVisible = false;
        this.innerModalValue = '';
        this.innerModalType = '';
        this._active = false;
    }
    Object.defineProperty(FileBrowserComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            this._active = active;
            if (this._active) {
                this.loadInitialData();
            }
        },
        enumerable: true,
        configurable: true
    });
    FileBrowserComponent.prototype.clickedOutside = function ($event) {
        // here you can hide your menu
        if ($event.button === 0) {
            this.contextMenuPos.x = -1;
            this.contextMenuPos.y = -1;
        }
    };
    FileBrowserComponent.prototype.closeModal = function () {
        this._active = false;
        this.activeChange.emit(this._active);
    };
    FileBrowserComponent.prototype.ngOnInit = function () {
        // root level files is fetched from path input
        if (this._active) {
            this.loadInitialData();
        }
    };
    FileBrowserComponent.prototype.loadInitialData = function () {
        var _this = this;
        this.levels = [[]];
        this.fullPath = [];
        this.selectedLevel = -1;
        this.selectedFile = undefined;
        this.selected = [];
        this.apiService.getFiles(this.path)
            .subscribe(function (data) {
            _this.levels[0] = data;
        });
    };
    FileBrowserComponent.prototype.calculatePath = function (index, file) {
        var path = '';
        if (file) {
            for (var i = 0; i < index; i++) {
                path += this.fullPath[i] + "/";
            }
            path += file.name;
        }
        return path;
    };
    FileBrowserComponent.prototype.openNewLevel = function (index, file) {
        var _this = this;
        // event.preventDefault();
        // event.stopPropagation();
        this.selectedLevel = index;
        this.selectedFile = file;
        while (this.levels.length > index + 1) {
            this.levels.pop();
            this.fullPath.pop();
        }
        while (this.selected.length > index) {
            this.selected.pop();
        }
        if (file.type === 'folder') {
            var path = this.calculatePath(index, file);
            this.apiService.getFiles(this.path, path)
                .subscribe(function (data) {
                _this.levels.push(data);
                _this.fullPath.push(file.name);
            });
        }
        this.selected.push(file.name);
    };
    FileBrowserComponent.prototype.openContextMenu = function (event, index, file) {
        event.preventDefault();
        event.stopPropagation();
        this.contextMenuPos.x = event.clientX;
        this.contextMenuPos.y = event.clientY;
        if (event.clientY > window.innerHeight - 200) {
            this.contextMenuPos.y = event.clientY - 200;
        }
        // select the rightclicked item:
        this.openNewLevel(index, file);
    };
    FileBrowserComponent.prototype.openRenameModal = function () {
        this.innerModalValue = this.selectedFile.name;
        this.innerModalType = 'rename';
        this.innerModalVisible = true;
    };
    FileBrowserComponent.prototype.rename = function () {
        var _this = this;
        var body = {
            path: this.calculatePath(this.selectedLevel, this.selectedFile),
            name: this.innerModalValue
        };
        this.apiService.renameFile(this.path, body)
            .subscribe(function (data) {
            _this.selectedFile.name = _this.innerModalValue;
            _this.levels.pop();
            if (_this.selectedFile.type === 'folder') {
                _this.levels.pop();
                _this.fullPath[_this.fullPath.length - 1] = _this.innerModalValue;
                _this.selectedFile = undefined;
                _this.selectedLevel = -1;
            }
            _this.levels.push(data);
            _this.closeInnerModal();
        });
    };
    FileBrowserComponent.prototype.getDownloadPath = function () {
        var path = this.calculatePath(this.selectedLevel, this.selectedFile);
        return this.path + "?path=" + path + "&download";
    };
    FileBrowserComponent.prototype.openDeleteModal = function () {
        this.innerModalVisible = true;
        this.innerModalType = 'delete';
    };
    FileBrowserComponent.prototype.delete = function () {
        var _this = this;
        if (!this.selectedFile) {
            return;
        }
        var path = this.calculatePath(this.selectedLevel, this.selectedFile);
        this.apiService.deleteFile(this.path, path)
            .subscribe(function (data) {
            if (_this.selectedFile.type === 'folder') {
                _this.fullPath.pop();
                _this.levels.pop();
            }
            _this.levels.pop();
            _this.levels.push(data);
            _this.selectedFile.name = _this.fullPath[_this.fullPath.length - 1];
            _this.selectedFile.type = 'folder';
            _this.selectedLevel -= 1;
            _this.closeInnerModal();
        });
    };
    FileBrowserComponent.prototype.openUploadModal = function () {
        this.innerModalVisible = true;
        this.innerModalType = 'upload';
        this.innerModalValue = '';
    };
    FileBrowserComponent.prototype.openCreateFolderModal = function () {
        this.innerModalVisible = true;
        this.innerModalType = 'create';
        this.innerModalValue = '';
    };
    FileBrowserComponent.prototype.onFileSelected = function (e) {
        if (e.target.files.length > 0) {
            // check fileFormat
            // if (!e.target.files[0].name.endsWith('.tar')) {
            //   console.error('error, wrong fileType');
            //   this.innerModalValue = "Select file...";
            //   // this.fileStatus = 1;
            // } else {
            this.innerModalFile = e.target.files[0];
            this.innerModalValue = this.innerModalFile.name;
            // this.fileStatus = 2;
            // }
        }
    };
    FileBrowserComponent.prototype.uploadFile = function () {
        var _this = this;
        // console.log('upload');
        if (!this.innerModalFile) {
            console.error('no file selected');
            return;
        }
        // this.modalactive = false;
        // this.fileName = "Select file...";
        var formData = new FormData();
        formData.append('file', this.innerModalFile, this.innerModalValue);
        // calculate the final path:
        var newPath = '';
        if (this.selectedFile) {
            var path = this.calculatePath(this.selectedLevel, this.selectedFile);
            if (this.selectedFile.type === 'folder') {
                // create the new folder inside this.
                newPath = path + "/" + this.innerModalValue;
            }
            else {
                // create the new folder in this folder.
                var prev = path.substr(0, path.lastIndexOf('/'));
                if (prev !== '') {
                    prev += '/';
                }
                newPath = prev + this.innerModalValue;
            }
        }
        else {
            newPath = this.innerModalValue;
        }
        formData.append('path', newPath);
        // console.log(this.innerModalValue)
        this.apiService.uploadFile(this.path, formData)
            .subscribe(function (data) {
            if (data.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                _this.levels.pop();
                _this.levels.push(data.body);
                _this.closeInnerModal();
            }
        });
    };
    FileBrowserComponent.prototype.create = function () {
        var _this = this;
        if (!this.selectedFile) {
            return;
        }
        var path = this.calculatePath(this.selectedLevel, this.selectedFile);
        var newPath = '';
        if (this.selectedFile.type === 'folder') {
            // create the new folder inside this.
            newPath = path + "/" + this.innerModalValue;
        }
        else {
            // create the new folder in this folder.
            var prev = path.substr(0, path.lastIndexOf('/'));
            if (prev !== '') {
                prev += '/';
            }
            newPath = prev + this.innerModalValue;
        }
        this.apiService.createFolder(this.path, newPath)
            .subscribe(function (data) {
            _this.levels.pop();
            _this.levels.push(data);
            _this.closeInnerModal();
        });
    };
    FileBrowserComponent.prototype.closeInnerModal = function () {
        // console.log('close inner modeal');
        this.innerModalVisible = false;
    };
    FileBrowserComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], FileBrowserComponent.prototype, "active", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "canCreateFolder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FileBrowserComponent.prototype, "package_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FileBrowserComponent.prototype, "path", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "isModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "activeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FileBrowserComponent.prototype, "selectedFiles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileBrowserComponent.prototype, "clickedOutside", null);
    FileBrowserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-filebrowser',
            template: __importDefault(__webpack_require__(/*! raw-loader!./FileBrowser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/FileBrowser/FileBrowser.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./FileBrowser.component.sass */ "./src/app/Components/FileBrowser/FileBrowser.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"]])
    ], FileBrowserComponent);
    return FileBrowserComponent;
}());



/***/ }),

/***/ "./src/app/Components/FileBrowser/FileBrowser.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/FileBrowser/FileBrowser.module.ts ***!
  \**************************************************************/
/*! exports provided: FileBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserModule", function() { return FileBrowserModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _FileBrowser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileBrowser.component */ "./src/app/Components/FileBrowser/FileBrowser.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// angular modules



// declarations
// import { FileComponent } from './file.component';

var FileBrowserModule = /** @class */ (function () {
    function FileBrowserModule() {
    }
    FileBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _FileBrowser_component__WEBPACK_IMPORTED_MODULE_3__["FileBrowserComponent"],
            ],
            providers: [],
            exports: [_FileBrowser_component__WEBPACK_IMPORTED_MODULE_3__["FileBrowserComponent"]]
        })
    ], FileBrowserModule);
    return FileBrowserModule;
}());



/***/ }),

/***/ "./src/app/Components/Message/Message.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/Components/Message/Message.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvTWVzc2FnZS9NZXNzYWdlLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/Components/Message/Message.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/Message/Message.component.ts ***!
  \*********************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.visiblityState = 'hidden';
        // @Input() title: string = 'Title';
        // @Input() active: boolean = false;
        // @Output() activeChange = new EventEmitter<boolean>();
        this.duration = 3000;
        this.type = 'alert-success';
        this._active = false;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // close() {
        // this.active = false;
        // this.activeChange.emit(this.active);
        // }
    }
    Object.defineProperty(MessageComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            this._active = active;
            if (active) {
                this.visiblityState = 'shown';
                setTimeout(function () {
                    _this.visiblityState = 'hidden';
                    _this._active = false;
                    _this.activeChange.emit(false);
                }, this.duration);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MessageComponent.prototype, "duration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MessageComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "activeChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MessageComponent.prototype, "active", null);
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'message',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Message/Message.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('visibilityChanged', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('shown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('shown => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('600ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => shown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ 'display': 'block' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms')]),
                ])
            ],
            styles: [__importDefault(__webpack_require__(/*! ./Message.component.sass */ "./src/app/Components/Message/Message.component.sass")).default]
        })
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/Components/Message/Message.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Components/Message/Message.module.ts ***!
  \******************************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Message.component */ "./src/app/Components/Message/Message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
//angular modules



//declarations

var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            declarations: [
                _Message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]
            ],
            providers: [],
            exports: [_Message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "./src/app/Components/Modal/Modal.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/Components/Modal/Modal.component.sass ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal {\n  display: block !important;\n}\n\n.modal-dialog {\n  height: 100%;\n  max-width: 90%;\n}\n\n.modal-content {\n  max-height: 95%;\n}\n\n.modal-body {\n  margin-top: 5px;\n  overflow-y: scroll;\n}\n\n.modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: -1;\n}\n\n.modal-footer, .modal-header {\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL0NvbXBvbmVudHMvTW9kYWwvTW9kYWwuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvTW9kYWwvTW9kYWwuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsK0NBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLGNBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvTW9kYWwvTW9kYWwuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxcbiAgLy8gbWF4LWhlaWdodDogOTUlXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnRcblxuLm1vZGFsLWRpYWxvZ1xuICBoZWlnaHQ6IDEwMCVcbiAgbWF4LXdpZHRoOiA5MCVcblxuLm1vZGFsLWNvbnRlbnRcbiAgbWF4LWhlaWdodDogOTUlXG5cbi5tb2RhbC1ib2R5XG4gIG1hcmdpbi10b3A6IDVweFxuICBvdmVyZmxvdy15OiBzY3JvbGxcblxuLm1vZGFsLWJhY2tncm91bmRcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZFxuICB0b3A6IDBcbiAgcmlnaHQ6IDBcbiAgYm90dG9tOiAwXG4gIGxlZnQ6IDBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMFxuICBvcGFjaXR5OiAwLjc1XG4gIHotaW5kZXg6IC0xXG5cbi5tb2RhbC1mb290ZXIsIC5tb2RhbC1oZWFkZXJcbiAgZmxleC1zaHJpbms6IDBcbiIsIi5tb2RhbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1kaWFsb2cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogOTAlO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDk1JTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLm1vZGFsLWJhY2tncm91bmQge1xuICAvKiBtb2RhbCBiYWNrZ3JvdW5kIGZpeGVkIGFjcm9zcyB3aG9sZSBzY3JlZW4gKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG9wYWNpdHk6IDAuNzU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubW9kYWwtZm9vdGVyLCAubW9kYWwtaGVhZGVyIHtcbiAgZmxleC1zaHJpbms6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/Components/Modal/Modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/Modal/Modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.title = 'Title';
        this.active = false;
        this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalComponent.prototype.close = function () {
        this.active = false;
        this.activeChange.emit(this.active);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ModalComponent.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "activeChange", void 0);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Modal/Modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./Modal.component.sass */ "./src/app/Components/Modal/Modal.component.sass")).default]
        })
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/Components/Modal/Modal.module.ts":
/*!**************************************************!*\
  !*** ./src/app/Components/Modal/Modal.module.ts ***!
  \**************************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Message_Message_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal/Modal.component */ "./src/app/Components/Modal/Modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




//imports

//declarations

var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    ModalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _Message_Message_module__WEBPACK_IMPORTED_MODULE_4__["MessageModule"],
            ],
            declarations: [
                _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]
            ],
            providers: [],
            exports: [
                _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"]
            ]
        })
    ], ModalModule);
    return ModalModule;
}());



/***/ }),

/***/ "./src/app/Components/Navbar/Navbar.component.sass":
/*!*********************************************************!*\
  !*** ./src/app/Components/Navbar/Navbar.component.sass ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand {\n  background-color: #5c5c5c;\n  width: 220px;\n  min-width: 220px;\n  max-width: 220px;\n}\n\n.nav-user {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1YzVjXG4gIHdpZHRoOiAyMjBweFxuICBtaW4td2lkdGg6IDIyMHB4XG4gIG1heC13aWR0aDogMjIwcHhcblxuLm5hdi11c2VyXG4gIGNvbG9yOiB3aGl0ZVxuIiwiLm5hdmJhci1icmFuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YzVjNWM7XG4gIHdpZHRoOiAyMjBweDtcbiAgbWluLXdpZHRoOiAyMjBweDtcbiAgbWF4LXdpZHRoOiAyMjBweDtcbn1cblxuLm5hdi11c2VyIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Components/Navbar/Navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/Navbar/Navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.username = "";
        this.IsAuthenticated = false;
        //get username
        if (authService.isAuthenticated()) {
            this.IsAuthenticated = true;
            this.username = authService.getUsername();
        }
    }
    NavbarComponent.prototype.signout = function () {
        this.authService.logout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/Navbar/Navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./Navbar.component.sass */ "./src/app/Components/Navbar/Navbar.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/Components/Navbar/Navbar.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Components/Navbar/Navbar.module.ts ***!
  \****************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.component */ "./src/app/Components/Navbar/Navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



//components

var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _Navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]
            ],
            exports: [
                _Navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]
            ],
            entryComponents: [
                _Navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/Components/Tooltip/Tooltip.component.sass":
/*!***********************************************************!*\
  !*** ./src/app/Components/Tooltip/Tooltip.component.sass ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tooltip {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL0NvbXBvbmVudHMvVG9vbHRpcC9Ub29sdGlwLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9Db21wb25lbnRzL1Rvb2x0aXAvVG9vbHRpcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvVG9vbHRpcC9Ub29sdGlwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXBcbiAgb3BhY2l0eTogMC41XG4iLCIudG9vbHRpcCB7XG4gIG9wYWNpdHk6IDAuNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/Tooltip/Tooltip.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/Tooltip/Tooltip.component.ts ***!
  \*********************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TooltipComponent = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function TooltipComponent(element, cdr) {
        this.element = element;
        this.cdr = cdr;
        this.placement = "bottom";
        this.animation = true;
        this.opacity = 0.5;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.top = -100000;
        this.left = -100000;
        this.isIn = false;
        this.isFade = false;
    }
    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------
    TooltipComponent.prototype.ngAfterViewInit = function () {
        this.show();
        this.cdr.detectChanges();
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    TooltipComponent.prototype.show = function () {
        if (!this.hostElement)
            return;
        var p = this.positionElements(this.hostElement, this.element.nativeElement.children[0], this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        if (this.animation)
            this.isFade = true;
    };
    TooltipComponent.prototype.hide = function () {
        this.top = -100000;
        this.left = -100000;
        this.isIn = true;
        if (this.animation)
            this.isFade = false;
    };
    // -------------------------------------------------------------------------
    // Private Methods
    // -------------------------------------------------------------------------
    TooltipComponent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var positionStrParts = positionStr.split("-");
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || "center";
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case "right":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case "left":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case "bottom":
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    };
    TooltipComponent.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    TooltipComponent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    TooltipComponent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) // IE
            return nativeEl.currentStyle[cssProp];
        if (window.getComputedStyle)
            return window.getComputedStyle(nativeEl)[cssProp];
        // finally try and get inline style
        return nativeEl.style[cssProp];
    };
    TooltipComponent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, "position") || "static") === "static";
    };
    TooltipComponent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    TooltipComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", HTMLElement)
    ], TooltipComponent.prototype, "hostElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TooltipComponent.prototype, "placement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TooltipComponent.prototype, "animation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TooltipComponent.prototype, "opacity", void 0);
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "tooltip-content",
            template: "\n<div class=\"tooltip {{ placement }}\"\n     [style.top]=\"top + 'px'\"\n     [style.left]=\"left + 'px'\"\n     [style.opacity]=\"opacity\"\n     [class.in]=\"isIn\"\n     [class.fade]=\"isFade\"\n     role=\"Atooltip\">\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\">\n        <ng-content></ng-content>\n        {{ content }}\n    </div>\n</div>\n",
            styles: [__importDefault(__webpack_require__(/*! ./Tooltip.component.sass */ "./src/app/Components/Tooltip/Tooltip.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/Components/Tooltip/Tooltip.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/Tooltip/Tooltip.directive.ts ***!
  \*********************************************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return Tooltip; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.component */ "./src/app/Components/Tooltip/Tooltip.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var Tooltip = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function Tooltip(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.tooltipAnimation = true;
        this.tooltipPlacement = "bottom";
    }
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    Tooltip.prototype.show = function () {
        if (this.tooltipDisabled || this.visible)
            return;
        this.visible = true;
        if (typeof this.content === "string") {
            var factory = this.resolver.resolveComponentFactory(_Tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"]);
            if (!this.visible)
                return;
            this.tooltip = this.viewContainerRef.createComponent(factory);
            this.tooltip.instance.hostElement = this.viewContainerRef.element.nativeElement;
            this.tooltip.instance.content = this.content;
            this.tooltip.instance.placement = this.tooltipPlacement;
            this.tooltip.instance.animation = this.tooltipAnimation;
            this.tooltip.instance.opacity = this.tooltipOpacity;
        }
        else {
            var tooltip = this.content;
            tooltip.hostElement = this.viewContainerRef.element.nativeElement;
            tooltip.placement = this.tooltipPlacement;
            tooltip.animation = this.tooltipAnimation;
            tooltip.opacity = this.tooltipOpacity;
            tooltip.show();
        }
    };
    Tooltip.prototype.hide = function () {
        if (!this.visible)
            return;
        this.visible = false;
        if (this.tooltip)
            this.tooltip.destroy();
        if (this.content instanceof _Tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"])
            this.content.hide();
    };
    Tooltip.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("tooltip"),
        __metadata("design:type", Object)
    ], Tooltip.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Tooltip.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], Tooltip.prototype, "tooltipAnimation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tooltip.prototype, "tooltipPlacement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], Tooltip.prototype, "tooltipOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("focusin"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseenter"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Tooltip.prototype, "show", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("focusout"),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("mouseleave"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Tooltip.prototype, "hide", null);
    Tooltip = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[tooltip]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], Tooltip);
    return Tooltip;
}());



/***/ }),

/***/ "./src/app/Components/Tooltip/Tooltip.module.ts":
/*!******************************************************!*\
  !*** ./src/app/Components/Tooltip/Tooltip.module.ts ***!
  \******************************************************/
/*! exports provided: Tooltip, TooltipComponent, TooltipModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipModule", function() { return TooltipModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tooltip.directive */ "./src/app/Components/Tooltip/Tooltip.directive.ts");
/* harmony import */ var _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tooltip.component */ "./src/app/Components/Tooltip/Tooltip.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"]; });

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    TooltipModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"],
            ],
            exports: [
                _Tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["Tooltip"],
                _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"],
            ],
            entryComponents: [
                _Tooltip_component__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"]
            ]
        })
    ], TooltipModule);
    return TooltipModule;
}());



/***/ }),

/***/ "./src/app/Dashboard/Dashboard.component.sass":
/*!****************************************************!*\
  !*** ./src/app/Dashboard/Dashboard.component.sass ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.numberRow {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.numberTitle {\n  margin: 0;\n}\n\n.divider::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 52px;\n  border-left: 2px solid rgba(188, 4, 78, 0.5);\n  margin-top: 10px;\n}\n\n.number {\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0;\n  opacity: 0.5;\n}\n\n.number.errors {\n  color: red;\n}\n\n.half-graph {\n  margin: 0;\n  margin-bottom: 10px;\n}\n\n.half-graph .card {\n  padding-right: 40px;\n}\n\n.half-graph .card .card-body {\n  height: 200px;\n  padding: 0;\n}\n\n.filetypes {\n  height: 300px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL0Rhc2hib2FyZC9EYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCIvVXNlcnMvYXhlbnUvUHJvamVjdHMvU3lkYXJraXZlcmEvQVBQL0FuZ3VsYXIvc3JjL2FwcC9EYXNoYm9hcmQvRGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtBQ0hGOztBREtBO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0ZGOztBREtBO0VBQ0ksWUFBQTtFQUNBLHlCQWhCb0I7RUFrQnBCLG1CQUFBO0VBQ0EsV0FBQTtBQ0hKOztBREtBO0VBQ0ksMENBQUE7QUNGSjs7QURLRTtFQUNFLFdBQUE7QUNGSjs7QURJQTtFQUNFLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNERjs7QURHQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxvQkFBQTtFQUFBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FDcERBO0VBQ0Usc0NBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUR1REY7O0FDckRBO0VBQ0UsU0FBQTtBRHdERjs7QUN0REE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUR5REY7O0FDdkRBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUQwREY7O0FDeERFO0VBQ0UsVUFBQTtBRDBESjs7QUN4REE7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7QUQyREY7O0FDekRFO0VBQ0UsbUJBQUE7QUQyREo7O0FDekRJO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUQyRE47O0FDekRBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FENERGIiwiZmlsZSI6InNyYy9hcHAvRGFzaGJvYXJkL0Rhc2hib2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBcbi8vICAgY29sb3I6IHJlZFxuJGNvbXBhbnktY29sb3ItcHJpbWFyeTogI2JjMDQ0ZVxuXG5odG1sXG4gIGhlaWdodDogMTAwJVxuXG4ubm9zZWxlY3RcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmVcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmVcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lXG4gIHVzZXItc2VsZWN0OiBub25lXG5cblxuLmNvbXBhbnktdGFibGUtaGVhZFxuICAgIGJvcmRlcjogbm9uZVxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wYW55LWNvbG9yLXByaW1hcnlcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5XG4gICAgLyogY29sb3I6ICNiYzA0NGUgKi9cbiAgICBjb2xvcjogI2VlZVxuXG4udGFibGVcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMilcblxuYnV0dG9uXG4gICYuYnRuXG4gICAgbWFyZ2luOiAycHhcblxuLnJlZnJlc2hcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgYm9yZGVyOiAwXG4gIGNvbG9yOiB3aGl0ZVxuICAvKiBtYXJnaW4tbGVmdDogODBweCAqL1xuICBmbG9hdDogcmlnaHRcbiAgY29sb3I6IGluaGVyaXRcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHhcblxuLmljb24tYnV0dG9uOmhvdmVyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWI1YjVcbiAgYm9yZGVyLXJhZGl1czogMnB4XG4gIGNvbG9yOiB3aGl0ZVxuXG4uZHJhZy1oYW5kbGVcbiAgY3Vyc29yOiBncmFiXG5cblxuLmNhcmRcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxuXG4uaWNvbi1zbWFsbFxuICBmb250LXNpemU6IDFlbVxuIiwiaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jb21wYW55LXRhYmxlLWhlYWQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYzA0NGU7XG4gIC8qIGNvbG9yOiAjYmMwNDRlICovXG4gIGNvbG9yOiAjZWVlO1xufVxuXG4udGFibGUge1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmJ1dHRvbi5idG4ge1xuICBtYXJnaW46IDJweDtcbn1cblxuLnJlZnJlc2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIG1hcmdpbi1sZWZ0OiA4MHB4ICovXG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4uaWNvbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyYWctaGFuZGxlIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pY29uLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5udW1iZXJSb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubnVtYmVyVGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5kaXZpZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDE4OCwgNCwgNzgsIDAuNSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5udW1iZXIge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC41O1xufVxuLm51bWJlci5lcnJvcnMge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaGFsZi1ncmFwaCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5oYWxmLWdyYXBoIC5jYXJkIHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5oYWxmLWdyYXBoIC5jYXJkIC5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmlsZXR5cGVzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCJAaW1wb3J0IC4uLy4uL3N0eWxlc1xuXG4ubnVtYmVyUm93XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW1cbiAgbWFyZ2luOiAwXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgcGFkZGluZzogMTBweFxuXG4ubnVtYmVyVGl0bGVcbiAgbWFyZ2luOiAwXG5cbi5kaXZpZGVyOjpiZWZvcmVcbiAgY29udGVudDogXCJcIlxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgbGVmdDogMFxuICBoZWlnaHQ6IDUycHhcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKCRjb21wYW55LWNvbG9yLXByaW1hcnksIDAuNSlcbiAgbWFyZ2luLXRvcDogMTBweFxuXG4ubnVtYmVyXG4gIGZvbnQtc2l6ZTogMmVtXG4gIGZvbnQtd2VpZ2h0OiBib2xkXG4gIG1hcmdpbjogMFxuICBvcGFjaXR5OiAwLjVcblxuICAmLmVycm9yc1xuICAgIGNvbG9yOiByZWRcblxuLmhhbGYtZ3JhcGhcbiAgbWFyZ2luOiAwXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcblxuICAuY2FyZFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHhcblxuICAgIC5jYXJkLWJvZHlcbiAgICAgIGhlaWdodDogMjAwcHhcbiAgICAgIHBhZGRpbmc6IDBcblxuLmZpbGV0eXBlc1xuICBoZWlnaHQ6IDMwMHB4XG4gIG1hcmdpbi1ib3R0b206IDEwcHhcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Dashboard/Dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/Dashboard/Dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities */ "./src/app/Utilities.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiService) {
        this.apiService = apiService;
        this.stats = undefined;
        // options
        this.showLegend = true;
        this.colorScheme = {
            domain: _Utilities__WEBPACK_IMPORTED_MODULE_2__["GraphColors"]
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        // showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = "Country";
        this.showYAxisLabel = true;
        this.yAxisLabel = "Population";
        this.autoScale = true;
        this.dataLoaded = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // load the data from the server and reorder it for the various graphs.
        console.log("init");
        this.apiService.getStatsDashboard().subscribe(function (data) {
            console.log(data);
            _this.stats = data;
            _this.total_size = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["formatBytes"])(data["total_size"]);
            _this.total_number_of_files = data["total_number_of_files"];
            _this.total_number_of_errors = data["total_number_of_errors"];
            _this.total_number_of_packages = data["total_number_of_packages"];
            _this.fileTypes = [];
            _this.fileTypesErrors = [];
            for (var key in _this.stats.fileTypes) {
                var value = _this.stats.fileTypes[key];
                _this.fileTypes.push({
                    name: value["name"].toUpperCase(),
                    value: value["total"]
                });
                _this.fileTypesErrors.push({
                    name: value["name"].toUpperCase(),
                    value: value["errors"]
                });
            }
            _this.fileTypesErrors = _this.fileTypesErrors.sort(function (a, b) {
                if (a["value"] > b["value"]) {
                    return -1;
                }
                return 1;
            });
            var counts = [];
            var sizes = [];
            for (var key in _this.stats.graphData) {
                var value = _this.stats.graphData[key];
                counts.push({ name: value["date"], value: value["count"] });
                sizes.push({ name: value["date"], value: value["size"] });
            }
            _this.graphDataSize = [
                {
                    name: "size",
                    series: sizes
                }
            ];
            _this.graphDataCount = [
                {
                    name: "count",
                    series: counts
                }
            ];
            _this.dataLoaded = true;
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dashboard",
            template: __importDefault(__webpack_require__(/*! raw-loader!./Dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Dashboard/Dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./Dashboard.component.sass */ "./src/app/Dashboard/Dashboard.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Dashboard/combo-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/Dashboard/combo-chart.component.ts ***!
  \****************************************************/
/*! exports provided: ComboChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboChartComponent", function() { return ComboChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// import { getUniqueXDomainValues } from '@swimlane/ngx-charts';
var ComboChartComponent = /** @class */ (function (_super) {
    __extends(ComboChartComponent, _super);
    function ComboChartComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.legendTitle = 'Legend';
        _this.showGridLines = true;
        _this.curve = d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveLinear"];
        _this.activeEntries = [];
        _this.roundDomains = false;
        _this.tooltipDisabled = false;
        _this.showRefLines = false;
        _this.showRefLabels = true;
        _this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.deactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.margin = [10, 20, 10, 20];
        _this.xAxisHeight = 0;
        _this.yAxisWidth = 0;
        _this.timelineHeight = 50;
        _this.timelinePadding = 10;
        return _this;
    }
    ComboChartComponent.prototype.update = function () {
        _super.prototype.update.call(this);
        this.dims = Object(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["calculateViewDimensions"])({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
        });
        // if (this.timeline) {
        //   this.dims.height -= (this.timelineHeight + this.margin[2] + this.timelinePadding);
        // }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        this.updateTimeline();
        this.setColors();
        // console.log(this.colors);
        this.legendOptions = this.getLegendOptions();
        this.transform = "translate(" + this.dims.xOffset + " , " + this.margin[0] + ")";
        this.clipPathId = 'clipabc';
        this.clipPath = "url(#" + this.clipPathId + ")";
    };
    ComboChartComponent.prototype.updateTimeline = function () {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = "translate(" + this.dims.xOffset + ", " + -this.margin[2] + ")";
        }
    };
    ComboChartComponent.prototype.getXDomain = function () {
        // let values = getUniqueXDomainValues(this.results);
        var valueSet = new Set();
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var result = _a[_i];
            for (var _b = 0, _c = result.series; _b < _c.length; _b++) {
                var d = _c[_b];
                valueSet.add(d.name);
            }
        }
        var values = Array.from(valueSet);
        this.scaleType = this.getScaleType(values);
        var domain = [];
        if (this.scaleType === 'linear') {
            values = values.map(function (v) { return Number(v); });
        }
        var min;
        var max;
        if (this.scaleType === 'time' || this.scaleType === 'linear') {
            min = this.xScaleMin
                ? this.xScaleMin
                : Math.min.apply(Math, values);
            max = this.xScaleMax
                ? this.xScaleMax
                : Math.max.apply(Math, values);
        }
        if (this.scaleType === 'time') {
            domain = [new Date(min), new Date(max)];
            this.xSet = values.slice().sort(function (a, b) {
                var aDate = a;
                var bDate = b;
                if (aDate > bDate)
                    return 1;
                if (bDate > aDate)
                    return -1;
                return 0;
            });
        }
        else if (this.scaleType === 'linear') {
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = values.slice().sort(function (a, b) { return (a - b); });
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    };
    ComboChartComponent.prototype.getYDomain = function () {
        var domain = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        var values = domain.slice();
        if (!this.autoScale) {
            values.push(0);
        }
        var min = this.yScaleMin
            ? this.yScaleMin
            : Math.min.apply(Math, values);
        var max = this.yScaleMax
            ? this.yScaleMax
            : Math.max.apply(Math, values);
        return [min, max];
    };
    ComboChartComponent.prototype.getSeriesDomain = function () {
        return this.results.map(function (d) { return d.name; });
    };
    ComboChartComponent.prototype.getXScale = function (domain, width) {
        var scale;
        if (this.scaleType === 'time') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleTime"])()
                .range([0, width])
                .domain(domain);
        }
        else if (this.scaleType === 'linear') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"])()
                .range([0, width])
                .domain(domain);
            if (this.roundDomains) {
                scale = scale.nice();
            }
        }
        else if (this.scaleType === 'ordinal') {
            scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scalePoint"])()
                .range([0, width])
                .padding(0.1)
                .domain(domain);
        }
        return scale;
    };
    ComboChartComponent.prototype.getYScale = function (domain, height) {
        var scale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"])()
            .range([height, 0])
            .domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    };
    ComboChartComponent.prototype.getScaleType = function (values) {
        var date = true;
        var num = true;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (!this.isDate(value)) {
                date = false;
            }
            if (typeof value !== 'number') {
                num = false;
            }
        }
        if (date)
            return 'time';
        if (num)
            return 'linear';
        return 'ordinal';
    };
    ComboChartComponent.prototype.isDate = function (value) {
        if (value instanceof Date) {
            return true;
        }
        return false;
    };
    ComboChartComponent.prototype.updateDomain = function (domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    };
    ComboChartComponent.prototype.updateHoveredVertical = function (item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    };
    ComboChartComponent.prototype.hideCircles = function () {
        this.hoveredVertical = null;
        this.deactivateAll();
    };
    ComboChartComponent.prototype.onClick = function (data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    };
    ComboChartComponent.prototype.trackBy = function (index, item) {
        return item.name;
    };
    ComboChartComponent.prototype.setColors = function () {
        var domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["ColorHelper"](this.scheme, this.schemeType, domain, this.customColors);
    };
    ComboChartComponent.prototype.getLegendOptions = function () {
        var opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    };
    ComboChartComponent.prototype.updateYAxisWidth = function (_a) {
        var width = _a.width;
        this.yAxisWidth = width;
        this.update();
    };
    ComboChartComponent.prototype.updateXAxisHeight = function (_a) {
        var height = _a.height;
        this.xAxisHeight = height;
        this.update();
    };
    ComboChartComponent.prototype.onActivate = function (item) {
        this.deactivateAll();
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item];
        this.activate.emit({ value: item, entries: this.activeEntries });
    };
    ComboChartComponent.prototype.onDeactivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = this.activeEntries.slice();
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    };
    ComboChartComponent.prototype.deactivateAll = function () {
        this.activeEntries = this.activeEntries.slice();
        for (var _i = 0, _a = this.activeEntries; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "legend", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComboChartComponent.prototype, "legendTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxis", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "showXAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "showYAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxisLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "autoScale", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "timeline", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "gradient", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "showGridLines", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "curve", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ComboChartComponent.prototype, "activeEntries", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ComboChartComponent.prototype, "schemeType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ComboChartComponent.prototype, "rangeFillOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xAxisTickFormatting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "yAxisTickFormatting", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ComboChartComponent.prototype, "xAxisTicks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ComboChartComponent.prototype, "yAxisTicks", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "roundDomains", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "showRefLines", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "referenceLines", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboChartComponent.prototype, "showRefLabels", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xScaleMin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ComboChartComponent.prototype, "xScaleMax", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ComboChartComponent.prototype, "yScaleMin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ComboChartComponent.prototype, "yScaleMax", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComboChartComponent.prototype, "activate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ComboChartComponent.prototype, "deactivate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('tooltipTemplate', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ComboChartComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])('seriesTooltipTemplate', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ComboChartComponent.prototype, "seriesTooltipTemplate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComboChartComponent.prototype, "hideCircles", null);
    ComboChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'combo-chart-component',
            template: "\n  <ngx-charts-chart\n      [view]=\"[width, height]\"\n      [showLegend]=\"legend\"\n      [legendOptions]=\"legendOptions\"\n      [activeEntries]=\"activeEntries\"\n      [animations]=\"animations\"\n      (legendLabelClick)=\"onClick($event)\"\n      (legendLabelActivate)=\"onActivate($event)\"\n      (legendLabelDeactivate)=\"onDeactivate($event)\">\n      <svg:defs>\n        <svg:clipPath [attr.id]=\"clipPathId\">\n          <svg:rect\n            [attr.width]=\"dims.width + 10\"\n            [attr.height]=\"dims.height + 10\"\n            [attr.transform]=\"'translate(-5, -5)'\"/>\n        </svg:clipPath>\n      </svg:defs>\n      <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\n        <svg:g ngx-charts-x-axis\n          *ngIf=\"xAxis\"\n          [xScale]=\"xScale\"\n          [dims]=\"dims\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showXAxisLabel\"\n          [labelText]=\"xAxisLabel\"\n          [tickFormatting]=\"xAxisTickFormatting\"\n          [ticks]=\"xAxisTicks\"\n          (dimensionsChanged)=\"updateXAxisHeight($event)\">\n        </svg:g>\n        <svg:g ngx-charts-y-axis\n          *ngIf=\"yAxis\"\n          [yScale]=\"yScale\"\n          [dims]=\"dims\"\n          [showGridLines]=\"showGridLines\"\n          [showLabel]=\"showYAxisLabel\"\n          [labelText]=\"yAxisLabel\"\n          [tickFormatting]=\"yAxisTickFormatting\"\n          [ticks]=\"yAxisTicks\"\n          [referenceLines]=\"referenceLines\"\n          [showRefLines]=\"showRefLines\"\n          [showRefLabels]=\"showRefLabels\"\n          (dimensionsChanged)=\"updateYAxisWidth($event)\">\n        </svg:g>\n        <svg:g [attr.clip-path]=\"clipPath\">\n          <svg:g *ngFor=\"let series of results; trackBy:trackBy\" [@animationState]=\"'active'\">\n            <svg:g ngx-charts-line-series\n              [xScale]=\"xScale\"\n              [yScale]=\"yScale\"\n              [colors]=\"colors\"\n              [data]=\"series\"\n              [activeEntries]=\"activeEntries\"\n              [scaleType]=\"scaleType\"\n              [curve]=\"curve\"\n              [rangeFillOpacity]=\"rangeFillOpacity\"\n              [hasRange]=\"hasRange\"\n              [animations]=\"animations\"\n            />\n          </svg:g>\n          <svg:g *ngIf=\"!tooltipDisabled\" (mouseleave)=\"hideCircles()\">\n            <svg:g ngx-charts-tooltip-area\n              [dims]=\"dims\"\n              [xSet]=\"xSet\"\n              [xScale]=\"xScale\"\n              [yScale]=\"yScale\"\n              [results]=\"results\"\n              [colors]=\"colors\"\n              [tooltipDisabled]=\"tooltipDisabled\"\n              [tooltipTemplate]=\"seriesTooltipTemplate\"\n              (hover)=\"updateHoveredVertical($event)\"\n            />\n            <svg:g *ngFor=\"let series of results\">\n              <svg:g ngx-charts-circle-series\n                [xScale]=\"xScale\"\n                [yScale]=\"yScale\"\n                [colors]=\"colors\"\n                [data]=\"series\"\n                [scaleType]=\"scaleType\"\n                [visibleValue]=\"hoveredVertical\"\n                [activeEntries]=\"activeEntries\"\n                [tooltipDisabled]=\"tooltipDisabled\"\n                [tooltipTemplate]=\"tooltipTemplate\"\n                (select)=\"onClick($event, series)\"\n                (activate)=\"onActivate($event)\"\n                (deactivate)=\"onDeactivate($event)\"\n              />\n            </svg:g>\n          </svg:g>\n        </svg:g>\n      </svg:g>\n    </ngx-charts-chart>\n  ",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animationState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0
                        }))
                    ])
                ])
            ]
        })
    ], ComboChartComponent);
    return ComboChartComponent;
}(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartComponent"]));



/***/ }),

/***/ "./src/app/NotFound.component.ts":
/*!***************************************!*\
  !*** ./src/app/NotFound.component.ts ***!
  \***************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

// S simple component to let the user know that the path they tried to navigate to does not exist.
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'notFound',
            template: "<h1>Path not found </h1>"
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/Package.component.sass":
/*!******************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.sass ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.input-label {\n  width: 100%;\n}\n\n.template {\n  opacity: 0.4;\n}\n\n.emptyList {\n  height: 400px;\n  width: 100%;\n  background-color: #eee;\n  display: table;\n  padding: 0px 40px;\n}\n\n.emptyList p {\n  display: table-cell;\n  vertical-align: middle;\n  color: #444;\n}\n\n.emptyList i {\n  vertical-align: middle;\n  color: #444;\n}\n\n.list-group-item.active {\n  background-color: #ddd;\n  border-color: #bc044e;\n}\n\n.list-group-item.active label, .list-group-item.active p, .list-group-item.active i, .list-group-item.active small {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZS5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7QUNIRjs7QURLQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNJLFlBQUE7RUFDQSx5QkFoQm9CO0VBa0JwQixtQkFBQTtFQUNBLFdBQUE7QUNISjs7QURLQTtFQUNJLDBDQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0FDRko7O0FESUE7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBQ3BEQTtFQUNFLFdBQUE7QUR1REY7O0FDckRBO0VBQ0UsWUFBQTtBRHdERjs7QUN0REE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEeURGOztBQ3hERTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEMERKOztBQ3pERTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBRDJESjs7QUN6REE7RUFDRSxzQkFBQTtFQUNBLHFCRnRCc0I7QUNrRnhCOztBQzNERTtFQUNFLFdBQUE7QUQ2REoiLCJmaWxlIjoic3JjL2FwcC9QYWNrYWdlRGV0YWlsL1BhY2thZ2UuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwXG4vLyAgIGNvbG9yOiByZWRcbiRjb21wYW55LWNvbG9yLXByaW1hcnk6ICNiYzA0NGVcblxuaHRtbFxuICBoZWlnaHQ6IDEwMCVcblxuLm5vc2VsZWN0XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZVxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZVxuICAtbW96LXVzZXItc2VsZWN0OiBub25lXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZVxuICB1c2VyLXNlbGVjdDogbm9uZVxuXG5cbi5jb21wYW55LXRhYmxlLWhlYWRcbiAgICBib3JkZXI6IG5vbmVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcGFueS1jb2xvci1wcmltYXJ5XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzk5OVxuICAgIC8qIGNvbG9yOiAjYmMwNDRlICovXG4gICAgY29sb3I6ICNlZWVcblxuLnRhYmxlXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpXG5cbmJ1dHRvblxuICAmLmJ0blxuICAgIG1hcmdpbjogMnB4XG5cbi5yZWZyZXNoXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gIGJvcmRlcjogMFxuICBjb2xvcjogd2hpdGVcbiAgLyogbWFyZ2luLWxlZnQ6IDgwcHggKi9cbiAgZmxvYXQ6IHJpZ2h0XG4gIGNvbG9yOiBpbmhlcml0XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4XG5cbi5pY29uLWJ1dHRvbjpob3ZlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1XG4gIGJvcmRlci1yYWRpdXM6IDJweFxuICBjb2xvcjogd2hpdGVcblxuLmRyYWctaGFuZGxlXG4gIGN1cnNvcjogZ3JhYlxuXG5cbi5jYXJkXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcblxuLmljb24tc21hbGxcbiAgZm9udC1zaXplOiAxZW1cbiIsImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29tcGFueS10YWJsZS1oZWFkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmMwNDRlO1xuICAvKiBjb2xvcjogI2JjMDQ0ZSAqL1xuICBjb2xvcjogI2VlZTtcbn1cblxuLnRhYmxlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5idXR0b24uYnRuIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5yZWZyZXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBtYXJnaW4tbGVmdDogODBweCAqL1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmljb24tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kcmFnLWhhbmRsZSB7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbi1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uaW5wdXQtbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRlbXBsYXRlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4uZW1wdHlMaXN0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwYWRkaW5nOiAwcHggNDBweDtcbn1cbi5lbXB0eUxpc3QgcCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjNDQ0O1xufVxuLmVtcHR5TGlzdCBpIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM0NDQ7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgYm9yZGVyLWNvbG9yOiAjYmMwNDRlO1xufVxuLmxpc3QtZ3JvdXAtaXRlbS5hY3RpdmUgbGFiZWwsIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHAsIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIGksIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHNtYWxsIHtcbiAgY29sb3I6ICMzMzM7XG59IiwiQGltcG9ydCAuLi8uLi9zdHlsZXNcblxuLmlucHV0LWxhYmVsXG4gIHdpZHRoOiAxMDAlXG5cbi50ZW1wbGF0ZVxuICBvcGFjaXR5OiAwLjRcblxuLmVtcHR5TGlzdFxuICBoZWlnaHQ6IDQwMHB4XG4gIHdpZHRoOiAxMDAlXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVcbiAgZGlzcGxheTogdGFibGVcbiAgcGFkZGluZzogMHB4IDQwcHhcbiAgcFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXG4gICAgY29sb3I6ICM0NDRcbiAgaVxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICBjb2xvcjogIzQ0NFxuXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkXG4gIGJvcmRlci1jb2xvcjogJGNvbXBhbnktY29sb3ItcHJpbWFyeVxuICBsYWJlbCwgcCwgaSwgc21hbGxcbiAgICBjb2xvcjogIzMzM1xuIl19 */");

/***/ }),

/***/ "./src/app/PackageDetail/Package.component.ts":
/*!****************************************************!*\
  !*** ./src/app/PackageDetail/Package.component.ts ***!
  \****************************************************/
/*! exports provided: PackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageComponent", function() { return PackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



//services

var PackageComponent = /** @class */ (function () {
    function PackageComponent(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.placeholderLocation = -1;
        this.placeholderName = "";
        this.selected_process_id = -1;
        this.selected_process = undefined;
        this.FileBrowserOpen = false;
        this.modalActive = false;
        this.templateName = "";
        this.currentProcesses = [];
        this.package = {
            name: "Name"
        };
    }
    PackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        // when id exists, load the package
        this.route.parent.params.subscribe(function (params) {
            _this.id = params["id"];
            _this.apiService.getPackage(_this.id).subscribe(function (data) {
                _this.package = data;
                console.log(data["processes"]);
            });
        });
        // load modules right away
        this.apiService.getModules().subscribe(function (data) {
            _this.modules = data;
        });
    };
    PackageComponent.prototype.getVisibleProcesses = function () {
        if (!this.package || !this.package.processes) {
            return [];
        }
        return this.package.processes.filter(function (item) {
            return !item.hidden;
        });
    };
    //exectute the workflow
    PackageComponent.prototype.startWorkflow = function () {
        this.apiService.startWorkflow(this.package.package_id);
        this.router.navigate(["packages", this.package.package_id, "status"]);
    };
    //select a process. If it is alreade selected, deselect it.
    PackageComponent.prototype.selectProcess = function (process) {
        if (this.selected_process_id != process.process_id) {
            this.selected_process_id = process.process_id;
            this.selected_process = process;
        }
        else {
            this.selected_process_id = -1;
            this.selected_process = undefined;
        }
    };
    // delete process
    PackageComponent.prototype.deleteProcess = function (process) {
        this.apiService.deleteProcess(process.process_id).subscribe(function (data) { });
        this.package.processes = this.package.processes.filter(function (item) {
            return item.process_id != process.process_id;
        });
        // move up all processes below
        var data = [];
        for (var index in this.package.processes) {
            var item = this.package.processes[index];
            if (item.type != "placeholder" && item.order > process.order) {
                item.order -= 1;
                data.push({ order: item.order, process_id: item.process_id });
            }
        }
        this.apiService
            .reorderPackageProcesses(data, this.package.package_id)
            .subscribe(function (data) { });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // add a new process to bottom of the list
    PackageComponent.prototype.addProcessLast = function (module_id) {
        var _this = this;
        var order = 0;
        if (this.package.processes.length > 0) {
            order =
                this.package.processes[this.package.processes.length - 1].order + 1;
        }
        this.apiService
            .addProcess({
            order: order,
            module: module_id,
            package: this.package.package_id
        })
            .subscribe(function (data) {
            _this.package.processes = data;
        });
    };
    // modify a process form value
    PackageComponent.prototype.setProcessValue = function (id, value) {
        var values = this.selected_process.value;
        values[id] = value;
        var data = { value: values };
        this.apiService
            .saveProcess(data, this.selected_process_id)
            .subscribe(function (data) { });
    };
    // get a process value. use default if none are set
    PackageComponent.prototype.getProcessValue = function (id) {
        var values = this.selected_process.value;
        if (id in values) {
            return values[id];
        }
        var form = this.selected_process.form;
        for (var i in form) {
            if (form[i].identifier == id) {
                if ("default" in form[i]) {
                    return form[i].default;
                }
            }
        }
        return "";
    };
    //check if the list of processes is empty
    PackageComponent.prototype.isListEmpty = function () {
        if (this.package == undefined || this.package.processes == undefined) {
            return true;
        }
        for (var _i = 0, _a = this.package.processes; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.hidden) {
                return false;
            }
        }
        return true;
    };
    // move up a process on step
    PackageComponent.prototype.moveUp = function (process) {
        var data = [];
        data.push({ order: process.order - 1, process_id: process.process_id });
        //find the one below
        var below;
        for (var i = 0; i < this.package.processes.length; i++) {
            var p = this.package.processes[i];
            if (p.order == process.order - 1) {
                data.push({ order: p.order + 1, process_id: p.process_id });
                this.package.processes[i].order += 1;
                this.package.processes[i + 1].order -= 1;
                break;
            }
        }
        this.apiService
            .reorderPackageProcesses(data, this.package.package_id)
            .subscribe(function (data) { });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // move down a process on step
    PackageComponent.prototype.moveDown = function (process) {
        var data = [];
        data.push({ order: process.order + 1, process_id: process.process_id });
        //find the one below
        var below;
        for (var i = 0; i < this.package.processes.length; i++) {
            var p = this.package.processes[i];
            if (p.order == process.order + 1) {
                data.push({ order: p.order - 1, process_id: p.process_id });
                // console.log(i);/
                this.package.processes[i].order -= 1;
                this.package.processes[i - 1].order += 1;
                break;
            }
        }
        this.apiService
            .reorderPackageProcesses(data, this.package.package_id)
            .subscribe(function (data) { });
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    // store info about the moving object in the event
    PackageComponent.prototype.dragStart = function (e, id, type, name) {
        e.dataTransfer.setData("id", id);
        e.dataTransfer.setData("type", type);
        e.dataTransfer.setData("name", name);
        this.placeholderName = name;
    };
    // drop the element
    PackageComponent.prototype.onDrop = function (e) {
        var _this = this;
        // calculate where to drop the new element
        var dropOrder = Math.ceil(this.placeholderLocation);
        if (dropOrder < 0) {
            dropOrder = 0;
        }
        // if the element is a module, create a new process
        if (e.dataTransfer.getData("type") == "module") {
            var data = [];
            // move down all items under existingIndex
            for (var index in this.package.processes) {
                var item = this.package.processes[index];
                if (item.type != "placeholder" && item.order >= dropOrder) {
                    item.order += 1;
                    data.push({ order: item.order, process_id: item.process_id }); // updates to push to backend
                }
            }
            //submit reorder:
            this.apiService
                .reorderPackageProcesses(data, this.package.package_id)
                .subscribe(function (data) { });
            //add temporary process
            var newProcess = {
                order: dropOrder,
                process_id: 100,
                module: e.dataTransfer.getData("id"),
                name: this.placeholderName
            };
            this.package.processes.splice(dropOrder, 0, newProcess);
            this.apiService
                .addProcess({
                order: dropOrder,
                module: e.dataTransfer.getData("id"),
                package: this.package.package_id
            })
                .subscribe(function (data) {
                _this.package.processes = data;
            });
        }
        else {
            // if the elemenet is a process, move around the processes
            var startOrder = -1;
            var movedProcessIndex;
            var data = [];
            for (var index in this.package.processes) {
                var item = this.package.processes[index];
                if (item.process_id == e.dataTransfer.getData("id")) {
                    startOrder = item.order;
                    movedProcessIndex = index;
                }
            }
            if (startOrder > dropOrder) {
                // the item was dragged up. items from dropOrder to startOrder should be moved down.
                for (var index in this.package.processes) {
                    var item = this.package.processes[index];
                    if (item.type != "placeholder" &&
                        item.order < startOrder &&
                        item.order >= dropOrder) {
                        item.order += 1;
                        data.push({ order: item.order, process_id: item.process_id });
                    }
                }
                this.package.processes[movedProcessIndex].order = dropOrder;
                data.push({
                    order: this.package.processes[movedProcessIndex].order,
                    process_id: this.package.processes[movedProcessIndex].process_id
                });
            }
            else {
                // the item was dragged down. items smaller than startOrder and larger than dropOrder shall be moved up.
                for (var index in this.package.processes) {
                    var item = this.package.processes[index];
                    if (item.type != "placeholder" &&
                        item.order > startOrder &&
                        item.order < dropOrder) {
                        item.order -= 1;
                        data.push({ order: item.order, process_id: item.process_id });
                    }
                }
                this.package.processes[movedProcessIndex].order = dropOrder - 1;
                data.push({
                    order: this.package.processes[movedProcessIndex].order,
                    process_id: this.package.processes[movedProcessIndex].process_id
                });
            }
            // push changes to api
            this.apiService
                .reorderPackageProcesses(data, this.package.package_id)
                .subscribe(function (data) { });
            this.package.processes = this.package.processes
                .filter(function (item) {
                return item["type"] != "placeholder";
            })
                .sort(function (a, b) {
                if (a.order > b.order) {
                    return 1;
                }
                return -1;
            });
        }
    };
    PackageComponent.prototype.onRelease = function (e) {
        //remove placeholder
        this.package.processes = this.package.processes.filter(function (item) {
            return item["type"] != "placeholder";
        });
    };
    //set ghost image to show where you will drop.
    PackageComponent.prototype.allowDrop = function (e, index) {
        e.preventDefault();
        var element = e.target;
        if (Math.abs(index % 1) > 0.4 && Math.abs(index % 1) < 0.6) {
            return;
        }
        if (e.pageY - element.getBoundingClientRect().top >
            element.offsetHeight * 0.5) {
            // drop below elements
            var ind = index + 0.5;
            if (ind != this.placeholderLocation) {
                this.placeholderLocation = ind;
                this.package.processes = this.package.processes.filter(function (item) {
                    return item.type != "placeholder";
                });
                var temp = {
                    type: "placeholder",
                    order: ind,
                    name: this.placeholderName
                };
                this.package.processes.splice(index + 1, 0, temp);
            }
        }
        else {
            //drop above element.
            var ind = index - 0.5;
            if (ind != this.placeholderLocation) {
                this.placeholderLocation = ind;
                this.package.processes = this.package.processes.filter(function (item) {
                    return item.type != "placeholder";
                });
                var temp = {
                    type: "placeholder",
                    order: ind,
                    name: this.placeholderName
                };
                this.package.processes.splice(index, 0, temp);
            }
        }
    };
    PackageComponent.prototype.allowDropTop = function (e) {
        e.preventDefault();
        //calculate order. Order will be 0.5 lower than first visible.
        var order = -0.5;
        for (var index in this.package.processes) {
            var item = this.package.processes[index];
            if (item.hidden) {
                order += 1;
            }
            else {
                break;
            }
        }
        this.placeholderLocation = order;
        this.package.processes = this.package.processes.filter(function (item) {
            return item.type != "placeholder";
        });
        var temp = {
            type: "placeholder",
            order: order,
            name: this.placeholderName
        };
        this.package.processes.push(temp);
        this.package.processes = this.package.processes.sort(function (a, b) {
            if (a.order > b.order) {
                return 1;
            }
            return -1;
        });
    };
    PackageComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "package",
            template: __importDefault(__webpack_require__(/*! raw-loader!./Package.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/Package.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./Package.component.sass */ "./src/app/PackageDetail/Package.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageComponent);
    return PackageComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/Package.module.ts":
/*!*************************************************!*\
  !*** ./src/app/PackageDetail/Package.module.ts ***!
  \*************************************************/
/*! exports provided: PackageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageModule", function() { return PackageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _Package_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Package.component */ "./src/app/PackageDetail/Package.component.ts");
/* harmony import */ var _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PackageDashboard.component */ "./src/app/PackageDetail/PackageDashboard.component.ts");
/* harmony import */ var _PackageStatus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PackageStatus.component */ "./src/app/PackageDetail/PackageStatus.component.ts");
/* harmony import */ var _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PackageTemplate.component */ "./src/app/PackageDetail/PackageTemplate.component.ts");
/* harmony import */ var _PackageHeader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PackageHeader.component */ "./src/app/PackageDetail/PackageHeader.component.ts");
/* harmony import */ var _PackageFiles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PackageFiles.component */ "./src/app/PackageDetail/PackageFiles.component.ts");
/* harmony import */ var _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/Tooltip/Tooltip.module */ "./src/app/Components/Tooltip/Tooltip.module.ts");
/* harmony import */ var _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/Navbar/Navbar.module */ "./src/app/Components/Navbar/Navbar.module.ts");
/* harmony import */ var _Components_Modal_Modal_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/Modal/Modal.module */ "./src/app/Components/Modal/Modal.module.ts");
/* harmony import */ var _Components_FileBrowser_FileBrowser_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/FileBrowser/FileBrowser.module */ "./src/app/Components/FileBrowser/FileBrowser.module.ts");
/* harmony import */ var _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Components/Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Services_package_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Services/package.service */ "./src/app/Services/package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// components






//modules





//services


var PackageModule = /** @class */ (function () {
    function PackageModule() {
    }
    PackageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_4__["NgxChartsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_11__["TooltipModule"],
                _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_12__["NavbarModule"],
                _Components_Modal_Modal_module__WEBPACK_IMPORTED_MODULE_13__["ModalModule"],
                _Components_FileBrowser_FileBrowser_module__WEBPACK_IMPORTED_MODULE_14__["FileBrowserModule"],
                _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_15__["MessageModule"]
            ],
            declarations: [
                _Package_component__WEBPACK_IMPORTED_MODULE_5__["PackageComponent"],
                _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_6__["PackageDashboardComponent"],
                _PackageHeader_component__WEBPACK_IMPORTED_MODULE_9__["PackageHeaderComponent"],
                _PackageStatus_component__WEBPACK_IMPORTED_MODULE_7__["PackageStatusComponent"],
                _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_8__["PackageTemplateComponent"],
                _PackageFiles_component__WEBPACK_IMPORTED_MODULE_10__["PackageFilesComponent"]
            ],
            providers: [_Services_api_service__WEBPACK_IMPORTED_MODULE_16__["APIService"], _Services_package_service__WEBPACK_IMPORTED_MODULE_17__["PackageService"]]
        })
    ], PackageModule);
    return PackageModule;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageDashboard.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDashboard.component.sass ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.numberRow {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.numberTitle {\n  margin: 0;\n}\n\n.divider::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 52px;\n  border-left: 2px solid rgba(188, 4, 78, 0.5);\n  margin-top: 10px;\n}\n\n.number {\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0;\n  opacity: 0.5;\n}\n\n.number.errors {\n  color: red;\n}\n\n.half-graph {\n  margin: 0;\n  margin-bottom: 10px;\n}\n\n.half-graph .card {\n  padding-right: 40px;\n}\n\n.half-graph .card .card-body {\n  height: 200px;\n  padding: 0;\n}\n\n.filetypes {\n  height: 300px;\n  margin-bottom: 10px;\n}\n\n.btn.browse {\n  margin-top: 15px;\n}\n\n.progress {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZURhc2hib2FyZC5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZURhc2hib2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7QUNIRjs7QURLQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNJLFlBQUE7RUFDQSx5QkFoQm9CO0VBa0JwQixtQkFBQTtFQUNBLFdBQUE7QUNISjs7QURLQTtFQUNJLDBDQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0FDRko7O0FESUE7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBQ25EQTtFQUNFLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEc0RGOztBQ3BEQTtFQUNFLFNBQUE7QUR1REY7O0FDckRBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FEd0RGOztBQ3REQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FEeURGOztBQ3ZERTtFQUNFLFVBQUE7QUR5REo7O0FDdkRBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FEMERGOztBQ3hERTtFQUNFLG1CQUFBO0FEMERKOztBQ3hESTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FEMEROOztBQ3hEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRDJERjs7QUN6REE7RUFDRSxnQkFBQTtBRDRERjs7QUN6REE7RUFDRSxtQkFBQTtBRDRERiIsImZpbGUiOiJzcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZURhc2hib2FyZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBcbi8vICAgY29sb3I6IHJlZFxuJGNvbXBhbnktY29sb3ItcHJpbWFyeTogI2JjMDQ0ZVxuXG5odG1sXG4gIGhlaWdodDogMTAwJVxuXG4ubm9zZWxlY3RcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmVcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmVcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lXG4gIHVzZXItc2VsZWN0OiBub25lXG5cblxuLmNvbXBhbnktdGFibGUtaGVhZFxuICAgIGJvcmRlcjogbm9uZVxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wYW55LWNvbG9yLXByaW1hcnlcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5XG4gICAgLyogY29sb3I6ICNiYzA0NGUgKi9cbiAgICBjb2xvcjogI2VlZVxuXG4udGFibGVcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMilcblxuYnV0dG9uXG4gICYuYnRuXG4gICAgbWFyZ2luOiAycHhcblxuLnJlZnJlc2hcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgYm9yZGVyOiAwXG4gIGNvbG9yOiB3aGl0ZVxuICAvKiBtYXJnaW4tbGVmdDogODBweCAqL1xuICBmbG9hdDogcmlnaHRcbiAgY29sb3I6IGluaGVyaXRcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHhcblxuLmljb24tYnV0dG9uOmhvdmVyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWI1YjVcbiAgYm9yZGVyLXJhZGl1czogMnB4XG4gIGNvbG9yOiB3aGl0ZVxuXG4uZHJhZy1oYW5kbGVcbiAgY3Vyc29yOiBncmFiXG5cblxuLmNhcmRcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxuXG4uaWNvbi1zbWFsbFxuICBmb250LXNpemU6IDFlbVxuIiwiaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jb21wYW55LXRhYmxlLWhlYWQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYzA0NGU7XG4gIC8qIGNvbG9yOiAjYmMwNDRlICovXG4gIGNvbG9yOiAjZWVlO1xufVxuXG4udGFibGUge1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmJ1dHRvbi5idG4ge1xuICBtYXJnaW46IDJweDtcbn1cblxuLnJlZnJlc2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIG1hcmdpbi1sZWZ0OiA4MHB4ICovXG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4uaWNvbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyYWctaGFuZGxlIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pY29uLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5udW1iZXJSb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubnVtYmVyVGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5kaXZpZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDE4OCwgNCwgNzgsIDAuNSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5udW1iZXIge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC41O1xufVxuLm51bWJlci5lcnJvcnMge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaGFsZi1ncmFwaCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5oYWxmLWdyYXBoIC5jYXJkIHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5oYWxmLWdyYXBoIC5jYXJkIC5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmlsZXR5cGVzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJ0bi5icm93c2Uge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSIsIkBpbXBvcnQgLi4vLi4vc3R5bGVzXG5cblxuLm51bWJlclJvd1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KVxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtXG4gIG1hcmdpbjogMFxuICBtYXJnaW4tYm90dG9tOiAxMHB4XG4gIHBhZGRpbmc6IDEwcHhcblxuLm51bWJlclRpdGxlXG4gIG1hcmdpbjogMFxuXG4uZGl2aWRlcjo6YmVmb3JlXG4gIGNvbnRlbnQ6IFwiXCJcbiAgcG9zaXRpb246IGFic29sdXRlXG4gIGxlZnQ6IDBcbiAgaGVpZ2h0OiA1MnB4XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgcmdiYSgkY29tcGFueS1jb2xvci1wcmltYXJ5LCAwLjUpXG4gIG1hcmdpbi10b3A6IDEwcHhcblxuLm51bWJlclxuICBmb250LXNpemU6IDJlbVxuICBmb250LXdlaWdodDogYm9sZFxuICBtYXJnaW46IDBcbiAgb3BhY2l0eTogMC41XG5cbiAgJi5lcnJvcnNcbiAgICBjb2xvcjogcmVkXG5cbi5oYWxmLWdyYXBoXG4gIG1hcmdpbjogMFxuICBtYXJnaW4tYm90dG9tOiAxMHB4XG5cbiAgLmNhcmRcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4XG5cbiAgICAuY2FyZC1ib2R5XG4gICAgICBoZWlnaHQ6IDIwMHB4XG4gICAgICBwYWRkaW5nOiAwXG5cbi5maWxldHlwZXNcbiAgaGVpZ2h0OiAzMDBweFxuICBtYXJnaW4tYm90dG9tOiAxMHB4XG5cbi5idG4uYnJvd3NlXG4gIG1hcmdpbi10b3A6IDE1cHhcbiAgLy8gdmVydGljYWwtYWxpZ246IG1pZGRsZVxuXG4ucHJvZ3Jlc3NcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxuIl19 */");

/***/ }),

/***/ "./src/app/PackageDetail/PackageDashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: PackageDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDashboardComponent", function() { return PackageDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utilities */ "./src/app/Utilities.ts");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var PackageDashboardComponent = /** @class */ (function () {
    function PackageDashboardComponent(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.id = -1;
        this.package = { processes: [] };
        this.fileTypes = [];
        this.title = 'new title';
        this.single = [
            {
                "name": "Germany",
                "value": 8940000
            },
            {
                "name": "USA",
                "value": 5000000
            },
            {
                "name": "France",
                "value": 7200000
            }
        ];
        this.view = [700, 400];
        // options
        this.showLegend = false;
        this.colorScheme = {
            domain: _Utilities__WEBPACK_IMPORTED_MODULE_2__["GraphColors"]
        };
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.gradient = false;
        // change to 0 later
        this.total_number_of_files = 12;
        this.total_size = '3.45 GB';
        this.progress = 0;
        this.browserActive = false;
        this.browserPath = "";
    }
    PackageDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.apiService.getPackage(_this.id).subscribe(function (data) {
                console.log(data);
                _this.package = data;
                var res = [];
                for (var key in _this.package.statistics.fileTypes) {
                    var value = _this.package.statistics.fileTypes[key];
                    // Use `key` and `value`
                    var temp = {};
                    temp['name'] = key;
                    temp['value'] = value;
                    res.push({ "name": key.toUpperCase(), "value": value });
                }
                _this.fileTypes = res.sort(function (a, b) {
                    if (a['value'] > b['value']) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
                _this.total_size = Object(_Utilities__WEBPACK_IMPORTED_MODULE_2__["formatBytes"])(_this.package.statistics.total_size);
                _this.total_number_of_files = _this.package.statistics.total_number_of_files;
                //calculate total progress
                _this.progress = 0;
                for (var _i = 0, _a = _this.package.processes; _i < _a.length; _i++) {
                    var process = _a[_i];
                    _this.progress += Number(process.progress);
                }
                _this.progress = _this.progress / _this.package.processes.length;
            });
        });
    };
    PackageDashboardComponent.prototype.openFileBrowser = function () {
        this.browserPath = "/api/package/" + this.id + "/files/";
        this.browserActive = true;
    };
    PackageDashboardComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PackageDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageDashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./PackageDashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageDashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./PackageDashboard.component.sass */ "./src/app/PackageDetail/PackageDashboard.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageDashboardComponent);
    return PackageDashboardComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageDetail-routing.routes.ts":
/*!***************************************************************!*\
  !*** ./src/app/PackageDetail/PackageDetail-routing.routes.ts ***!
  \***************************************************************/
/*! exports provided: packageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packageRoutes", function() { return packageRoutes; });
/* harmony import */ var _Package_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Package.component */ "./src/app/PackageDetail/Package.component.ts");
/* harmony import */ var _PackageHeader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageHeader.component */ "./src/app/PackageDetail/PackageHeader.component.ts");
/* harmony import */ var _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PackageDashboard.component */ "./src/app/PackageDetail/PackageDashboard.component.ts");
/* harmony import */ var _PackageStatus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PackageStatus.component */ "./src/app/PackageDetail/PackageStatus.component.ts");
/* harmony import */ var _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PackageTemplate.component */ "./src/app/PackageDetail/PackageTemplate.component.ts");
/* harmony import */ var _PackageFiles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PackageFiles.component */ "./src/app/PackageDetail/PackageFiles.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var packageRoutes = [
    { path: ':id', component: _PackageHeader_component__WEBPACK_IMPORTED_MODULE_1__["PackageHeaderComponent"], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: _PackageDashboard_component__WEBPACK_IMPORTED_MODULE_2__["PackageDashboardComponent"] },
            { path: 'files', component: _PackageFiles_component__WEBPACK_IMPORTED_MODULE_5__["PackageFilesComponent"] },
            { path: 'template', component: _PackageTemplate_component__WEBPACK_IMPORTED_MODULE_4__["PackageTemplateComponent"] },
            { path: 'edit', component: _Package_component__WEBPACK_IMPORTED_MODULE_0__["PackageComponent"] },
            { path: 'status', component: _PackageStatus_component__WEBPACK_IMPORTED_MODULE_3__["PackageStatusComponent"] }
        ] }
];


/***/ }),

/***/ "./src/app/PackageDetail/PackageFiles.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/PackageDetail/PackageFiles.component.ts ***!
  \*********************************************************/
/*! exports provided: PackageFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageFilesComponent", function() { return PackageFilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PackageFilesComponent = /** @class */ (function () {
    function PackageFilesComponent(apiService, route, router) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.id = -1;
        this.browserActive = false;
        this.browserPath = "";
    }
    PackageFilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.browserPath = "/api/package/" + _this.id + "/files/";
        });
    };
    PackageFilesComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PackageFilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageFiles',
            template: __importDefault(__webpack_require__(/*! raw-loader!./PackageFiles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageFiles.component.html")).default,
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageFilesComponent);
    return PackageFilesComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageHeader.component.sass":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.sass ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.package_title {\n  font-weight: bold;\n  color: white;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.nav-item.disabled {\n  cursor: not-allowed;\n}\n\n.nav-item.active {\n  background-color: #bc044e;\n}\n\n.nav-item .nav-link {\n  color: white;\n}\n\n.nav-item .nav-link.disabled {\n  color: gray;\n  pointer-events: none;\n  cursor: not-allowed;\n}\n\n.dropdown-item:active {\n  background-color: #bc044e;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZUhlYWRlci5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZUhlYWRlci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7QUNIRjs7QURLQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNJLFlBQUE7RUFDQSx5QkFoQm9CO0VBa0JwQixtQkFBQTtFQUNBLFdBQUE7QUNISjs7QURLQTtFQUNJLDBDQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0FDRko7O0FESUE7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBQ3BEQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRHVERjs7QUNwREU7RUFDRSxtQkFBQTtBRHVESjs7QUN0REU7RUFDRSx5QkZYb0I7QUNtRXhCOztBQ3ZERTtFQUNFLFlBQUE7QUR5REo7O0FDeERJO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUQwRE47O0FDdkRFO0VBQ0UseUJGckJvQjtFRXNCcEIsdUJBQUE7QUQwREoiLCJmaWxlIjoic3JjL2FwcC9QYWNrYWdlRGV0YWlsL1BhY2thZ2VIZWFkZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwXG4vLyAgIGNvbG9yOiByZWRcbiRjb21wYW55LWNvbG9yLXByaW1hcnk6ICNiYzA0NGVcblxuaHRtbFxuICBoZWlnaHQ6IDEwMCVcblxuLm5vc2VsZWN0XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZVxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZVxuICAtbW96LXVzZXItc2VsZWN0OiBub25lXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZVxuICB1c2VyLXNlbGVjdDogbm9uZVxuXG5cbi5jb21wYW55LXRhYmxlLWhlYWRcbiAgICBib3JkZXI6IG5vbmVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcGFueS1jb2xvci1wcmltYXJ5XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzk5OVxuICAgIC8qIGNvbG9yOiAjYmMwNDRlICovXG4gICAgY29sb3I6ICNlZWVcblxuLnRhYmxlXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpXG5cbmJ1dHRvblxuICAmLmJ0blxuICAgIG1hcmdpbjogMnB4XG5cbi5yZWZyZXNoXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gIGJvcmRlcjogMFxuICBjb2xvcjogd2hpdGVcbiAgLyogbWFyZ2luLWxlZnQ6IDgwcHggKi9cbiAgZmxvYXQ6IHJpZ2h0XG4gIGNvbG9yOiBpbmhlcml0XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4XG5cbi5pY29uLWJ1dHRvbjpob3ZlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1XG4gIGJvcmRlci1yYWRpdXM6IDJweFxuICBjb2xvcjogd2hpdGVcblxuLmRyYWctaGFuZGxlXG4gIGN1cnNvcjogZ3JhYlxuXG5cbi5jYXJkXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcblxuLmljb24tc21hbGxcbiAgZm9udC1zaXplOiAxZW1cbiIsImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29tcGFueS10YWJsZS1oZWFkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmMwNDRlO1xuICAvKiBjb2xvcjogI2JjMDQ0ZSAqL1xuICBjb2xvcjogI2VlZTtcbn1cblxuLnRhYmxlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5idXR0b24uYnRuIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5yZWZyZXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBtYXJnaW4tbGVmdDogODBweCAqL1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmljb24tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kcmFnLWhhbmRsZSB7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbi1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4ucGFja2FnZV90aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWl0ZW0uZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLm5hdi1pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYzA0NGU7XG59XG4ubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5hdi1pdGVtIC5uYXYtbGluay5kaXNhYmxlZCB7XG4gIGNvbG9yOiBncmF5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmRyb3Bkb3duLWl0ZW06YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjMDQ0ZTtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAuLi8uLi9zdHlsZXNcblxuLnBhY2thZ2VfdGl0bGVcbiAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgY29sb3I6IHdoaXRlXG4gIG1hcmdpbjogMFxuICBwYWRkaW5nOiAwXG4gIGN1cnNvcjogcG9pbnRlclxuXG4ubmF2LWl0ZW1cbiAgJi5kaXNhYmxlZFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWRcbiAgJi5hY3RpdmVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcGFueS1jb2xvci1wcmltYXJ5XG4gIC5uYXYtbGlua1xuICAgIGNvbG9yOiB3aGl0ZVxuICAgICYuZGlzYWJsZWRcbiAgICAgIGNvbG9yOiBncmF5XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZVxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZFxuXG4uZHJvcGRvd24taXRlbVxuICAmOmFjdGl2ZVxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wYW55LWNvbG9yLXByaW1hcnlcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudFxuIl19 */");

/***/ }),

/***/ "./src/app/PackageDetail/PackageHeader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/PackageDetail/PackageHeader.component.ts ***!
  \**********************************************************/
/*! exports provided: PackageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageHeaderComponent", function() { return PackageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Services_package_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/package.service */ "./src/app/Services/package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PackageHeaderComponent = /** @class */ (function () {
    function PackageHeaderComponent(apiService, route, router, packageService) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.packageService = packageService;
        this.name = "";
        this.showDropDown = false;
        this.status = -1;
        this.messageActive = false;
    }
    PackageHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.apiService.getPackage(_this.id).subscribe(function (data) {
                _this.active_template = data['active_template'];
                _this.name = data['name'];
                _this.status = data['status'];
            }, function (error) {
                //package was not found, display message and return to package list.
                _this.messageActive = true;
                // console.log("package not found, redirecting")
                setTimeout(function () {
                    _this.router.navigate(['/packages']);
                }, 4000);
            });
        });
        this.apiService.getPackages().subscribe(function (data) {
            _this.packages = data;
        });
        this.packageService.packageEmitter$.subscribe(function (item) {
            if ('active_template' in item) {
                _this.active_template = item['active_template'];
            }
        });
    };
    PackageHeaderComponent.prototype.navigateTo = function (package_id) {
        var topPath = this.router.url.split("/").pop();
        this.router.navigate(['../', package_id, topPath], { relativeTo: this.route });
        this.showDropDown = false;
    };
    PackageHeaderComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Services_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"] }
    ]; };
    PackageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'package',
            template: __importDefault(__webpack_require__(/*! raw-loader!./PackageHeader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageHeader.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./PackageHeader.component.sass */ "./src/app/PackageDetail/PackageHeader.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]])
    ], PackageHeaderComponent);
    return PackageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.sass":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.sass ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".Amodal.active {\n  display: block !important;\n}\n\n.modal-dialog, .modal-content {\n  height: 95%;\n}\n\n.modal-body {\n  overflow-y: scroll;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  float: right;\n  color: inherit;\n}\n\n.modal-background {\n  /* modal background fixed across whole screen */\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.75;\n  z-index: -1;\n}\n\n.loading {\n  border: 6px solid #f3f3f3;\n  border-top: 6px solid #3498db;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.log-row {\n  padding: 0;\n}\n\n.selection-header {\n  padding: 0.75rem 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZVN0YXR1cy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvUGFja2FnZURldGFpbC9QYWNrYWdlU3RhdHVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRjs7QURBQTtFQUNFLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNJRjs7QURGQTtFQUNFLCtDQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDS0Y7O0FESEE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7QUNNRjs7QURKQTtFQUNJO0lBQ0UsdUJBQUE7RUNPSjtFRE5FO0lBQ0UseUJBQUE7RUNRSjtBQUNGOztBRGJBO0VBQ0k7SUFDRSx1QkFBQTtFQ09KO0VETkU7SUFDRSx5QkFBQTtFQ1FKO0FBQ0Y7O0FEUEE7RUFDRSxVQUFBO0FDU0Y7O0FEUEE7RUFDRSx3QkFBQTtBQ1VGIiwiZmlsZSI6InNyYy9hcHAvUGFja2FnZURldGFpbC9QYWNrYWdlU3RhdHVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLkFtb2RhbC5hY3RpdmVcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudFxuXG4ubW9kYWwtZGlhbG9nLCAubW9kYWwtY29udGVudFxuICBoZWlnaHQ6IDk1JVxuXG4ubW9kYWwtYm9keVxuICBvdmVyZmxvdy15OiBzY3JvbGxcblxuLnJlZnJlc2hcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgYm9yZGVyOiAwXG4gIGNvbG9yOiB3aGl0ZVxuICBmbG9hdDogcmlnaHRcbiAgY29sb3I6IGluaGVyaXRcblxuLm1vZGFsLWJhY2tncm91bmRcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuXG4gIHBvc2l0aW9uOiBmaXhlZFxuICB0b3A6IDBcbiAgcmlnaHQ6IDBcbiAgYm90dG9tOiAwXG4gIGxlZnQ6IDBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMFxuICBvcGFjaXR5OiAwLjc1XG4gIHotaW5kZXg6IC0xXG5cbi5sb2FkaW5nXG4gIGJvcmRlcjogNnB4IHNvbGlkICNmM2YzZjNcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICMzNDk4ZGJcbiAgYm9yZGVyLXJhZGl1czogNTAlXG4gIHdpZHRoOiA1MHB4XG4gIGhlaWdodDogNTBweFxuICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGVcblxuQGtleWZyYW1lcyBzcGluXG4gICAgMCVcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgMTAwJVxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxuXG4ubG9nLXJvd1xuICBwYWRkaW5nOiAwXG5cbi5zZWxlY3Rpb24taGVhZGVyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbVxuIiwiLkFtb2RhbC5hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtZGlhbG9nLCAubW9kYWwtY29udGVudCB7XG4gIGhlaWdodDogOTUlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnJlZnJlc2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgLyogbW9kYWwgYmFja2dyb3VuZCBmaXhlZCBhY3Jvc3Mgd2hvbGUgc2NyZWVuICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAwLjc1O1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmxvYWRpbmcge1xuICBib3JkZXI6IDZweCBzb2xpZCAjZjNmM2YzO1xuICBib3JkZXItdG9wOiA2cHggc29saWQgIzM0OThkYjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4ubG9nLXJvdyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zZWxlY3Rpb24taGVhZGVyIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/PackageDetail/PackageStatus.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/PackageDetail/PackageStatus.component.ts ***!
  \**********************************************************/
/*! exports provided: PackageStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageStatusComponent", function() { return PackageStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PackageStatusComponent = /** @class */ (function () {
    function PackageStatusComponent(apiService, route, router) {
        var _this = this;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.modalActive = false;
        this.modalData = '';
        this.modalactive = false;
        this.modalLoading = true;
        this.modalType = 'info';
        this.modalProcess = undefined;
        this.messageActive = false;
        this.messageText = '';
        this.package = {
            name: 'Name'
        };
        router.events.subscribe(function (val) {
            clearInterval(_this.interval);
        });
    }
    PackageStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.id = +params.id;
            _this.updateData();
        });
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = setInterval(function () {
            _this.updateData();
        }, 3000);
    };
    PackageStatusComponent.prototype.showModal = function (process, type) {
        var _this = this;
        // load data fromserver...
        this.modalactive = true;
        this.modalLoading = true;
        this.modalData = '';
        this.modalProcess = undefined;
        if (type == 'info_log') {
            // fetch info log
            this.apiService.getProcessLogs(process.process_id).subscribe(function (data) {
                _this.modalLoading = false;
                _this.modalData = data.logs;
                _this.modalProcess = process;
            });
            // this.modalType = 'info';
            // console.log(process.logs)
            // this.apiService.getLogFile(type, process.process_id).subscribe((data) => {
            //   this.modalLoading = false;
            //   this.modalData = this.sanitizeLog(data);
            // });
        }
        else {
            this.modalLoading = false;
            this.modalProcess = process;
            console.log(process.errors);
            // this.modalType = 'error';
            // this.modalProcess = process;
            this.modalData = process.errors;
        }
    };
    PackageStatusComponent.prototype.startWorkflow = function () {
        this.apiService.startWorkflow(this.package.package_id);
        this.messageActive = true;
        this.messageText = 'Workflow is now started';
        this.updateData();
    };
    PackageStatusComponent.prototype.finishPackage = function () {
        this.messageActive = true;
        this.messageText = 'Package is now marked as finished. Depending on your configuration is is now safe to delete it';
        this.apiService.finishPackage(this.package.package_id);
        this.updateData();
    };
    PackageStatusComponent.prototype.updateData = function () {
        var _this = this;
        this.apiService.getPackage(this.id).subscribe(function (data) {
            _this.package = data;
            // console.log(data);
        });
    };
    PackageStatusComponent.prototype.removePackage = function () {
        var _this = this;
        if (confirm('Are you sure to delete "' + this.package.name + '"\n This action is irreversible')) {
            this.apiService.removePackage(this.id).subscribe(function (data) {
                _this.messageActive = true;
                _this.messageText = 'Package was successfully deleted. You will now be redirected to packagelist';
            });
            setTimeout(function () {
                _this.router.navigate(['packages']);
            }, 2000);
        }
    };
    PackageStatusComponent.prototype.abortProcess = function () {
        var _this = this;
        if (confirm('Are you sure to abort the process? You can restart it later.')) {
            // find running process
            // let processId = null;
            // for (let p of this.package.processes) {
            //   if (processId.status === 'Aborted') {
            //     processId = p.id;
            //   }
            // }
            this.apiService.abortPackage(this.id).subscribe(function (data) {
                _this.messageActive = true;
                _this.messageText = 'Package was successfully aborted.';
            });
            // setTimeout(() => {
            //   this.router.navigate(['packages']);
            // }, 2000)
        }
    };
    PackageStatusComponent.prototype.sanitizeLog = function (data) {
        // convert the file to html friendly text
        if (data) {
            return data.split('&').join('&amp;').split('<').join('&lt;').split('>').join('&gt;').split('\n').join('<br>');
        }
        return 'Log is empty';
    };
    PackageStatusComponent.prototype.getFilePath = function (filePath) {
        var pParts = this.modalProcess.log_path.split('/');
        var fParts = filePath.split('/');
        var i = 0;
        for (i; i < pParts.length; i++) {
            if (pParts[i] !== fParts[i]) {
                break;
            }
        }
        var res = '';
        for (var j = i; j < fParts.length; j++) {
            res += "/" + fParts[j];
        }
        return res;
    };
    PackageStatusComponent.prototype.getDuration = function (process) {
        if (!process || !process.start_time) {
            return '';
        }
        var start = new Date(process.start_time);
        var end = new Date();
        if (process.end_time) {
            end = new Date(process.end_time);
        }
        return this.formatDuration(end.getTime() - start.getTime());
    };
    PackageStatusComponent.prototype.zeroPad = function (n, width, z) {
        if (z === void 0) { z = '0'; }
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };
    PackageStatusComponent.prototype.formatDuration = function (dt) {
        var milli = Math.floor((dt / 100) % 10);
        var seconds = Math.floor((dt / 1000) % 60);
        var minutes = Math.floor((dt / 60000) % 60);
        var hours = Math.floor(dt / 3600000);
        if (dt < 60 * 1000) { // less than 60 seconds
            return seconds + "." + this.zeroPad(milli, 1) + "s";
        }
        else { // less than 1 day
            return this.zeroPad(hours, 2) + ":" + this.zeroPad(minutes, 2) + ":" + this.zeroPad(seconds, 2);
        }
    };
    PackageStatusComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PackageStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageStatus',
            template: __importDefault(__webpack_require__(/*! raw-loader!./PackageStatus.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageStatus.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./PackageStatus.component.sass */ "./src/app/PackageDetail/PackageStatus.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PackageStatusComponent);
    return PackageStatusComponent;
}());



/***/ }),

/***/ "./src/app/PackageDetail/PackageTemplate.component.sass":
/*!**************************************************************!*\
  !*** ./src/app/PackageDetail/PackageTemplate.component.sass ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.small-column {\n  width: 200px;\n}\n\nbutton {\n  margin-left: 10px;\n}\n\n.selected {\n  background-color: #aaa;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZVRlbXBsYXRlLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL2F4ZW51L1Byb2plY3RzL1N5ZGFya2l2ZXJhL0FQUC9Bbmd1bGFyL3NyYy9hcHAvUGFja2FnZURldGFpbC9QYWNrYWdlVGVtcGxhdGUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxZQUFBO0FDSEY7O0FES0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDSSxZQUFBO0VBQ0EseUJBaEJvQjtFQWtCcEIsbUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0E7RUFDSSwwQ0FBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtBQ0ZKOztBRElBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0RGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QUNwREE7RUFDRSxZQUFBO0FEdURGOztBQ3JEQTtFQUNFLGlCQUFBO0FEd0RGOztBQ3REQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBRHlERiIsImZpbGUiOiJzcmMvYXBwL1BhY2thZ2VEZXRhaWwvUGFja2FnZVRlbXBsYXRlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcFxuLy8gICBjb2xvcjogcmVkXG4kY29tcGFueS1jb2xvci1wcmltYXJ5OiAjYmMwNDRlXG5cbmh0bWxcbiAgaGVpZ2h0OiAxMDAlXG5cbi5ub3NlbGVjdFxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmVcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZVxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmVcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZVxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmVcbiAgdXNlci1zZWxlY3Q6IG5vbmVcblxuXG4uY29tcGFueS10YWJsZS1oZWFkXG4gICAgYm9yZGVyOiBub25lXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbXBhbnktY29sb3ItcHJpbWFyeVxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5OTlcbiAgICAvKiBjb2xvcjogI2JjMDQ0ZSAqL1xuICAgIGNvbG9yOiAjZWVlXG5cbi50YWJsZVxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKVxuXG5idXR0b25cbiAgJi5idG5cbiAgICBtYXJnaW46IDJweFxuXG4ucmVmcmVzaFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxuICBib3JkZXI6IDBcbiAgY29sb3I6IHdoaXRlXG4gIC8qIG1hcmdpbi1sZWZ0OiA4MHB4ICovXG4gIGZsb2F0OiByaWdodFxuICBjb2xvcjogaW5oZXJpdFxuICBtYXJnaW4tYm90dG9tOiAtMTBweFxuXG4uaWNvbi1idXR0b246aG92ZXJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNVxuICBib3JkZXItcmFkaXVzOiAycHhcbiAgY29sb3I6IHdoaXRlXG5cbi5kcmFnLWhhbmRsZVxuICBjdXJzb3I6IGdyYWJcblxuXG4uY2FyZFxuICBtYXJnaW4tYm90dG9tOiAxMHB4XG5cbi5pY29uLXNtYWxsXG4gIGZvbnQtc2l6ZTogMWVtXG4iLCJodG1sIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubm9zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmNvbXBhbnktdGFibGUtaGVhZCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JjMDQ0ZTtcbiAgLyogY29sb3I6ICNiYzA0NGUgKi9cbiAgY29sb3I6ICNlZWU7XG59XG5cbi50YWJsZSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuYnV0dG9uLmJ0biB7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ucmVmcmVzaCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogbWFyZ2luLWxlZnQ6IDgwcHggKi9cbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59XG5cbi5pY29uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWI1YjU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZHJhZy1oYW5kbGUge1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmljb24tc21hbGwge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuLnNtYWxsLWNvbHVtbiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCJAaW1wb3J0IC4uLy4uL3N0eWxlc1xuXG4uc21hbGwtY29sdW1uXG4gIHdpZHRoOiAyMDBweFxuXG5idXR0b25cbiAgbWFyZ2luLWxlZnQ6IDEwcHhcblxuLnNlbGVjdGVkXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFcbiAgY29sb3I6IHdoaXRlXG4iXX0= */");

/***/ }),

/***/ "./src/app/PackageDetail/PackageTemplate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/PackageDetail/PackageTemplate.component.ts ***!
  \************************************************************/
/*! exports provided: PackageTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageTemplateComponent", function() { return PackageTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Services_package_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/package.service */ "./src/app/Services/package.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var PackageTemplateComponent = /** @class */ (function () {
    function PackageTemplateComponent(apiService, route, router, packageService) {
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.packageService = packageService;
        this.active_template = -1;
    }
    PackageTemplateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.package_id = +params['id'];
            // get package
            _this.apiService.getPackage(_this.package_id).subscribe(function (data) {
                _this.package = data;
                _this.active_template = data['active_template'];
            });
        });
        this.apiService.getTemplates().subscribe(function (data) {
            var res = data;
            _this.templates = res.filter(function (item) {
                return !item.hidden;
            });
        });
    };
    PackageTemplateComponent.prototype.selectTemplate = function (template) {
        var _this = this;
        // api call to set the template for package.
        var data = { "active_template": template.template_id };
        this.apiService.setActiveTemplate(template.template_id, this.package_id, data).subscribe(function (res) {
            // window.location.href = '/packages/' + this.package_id + '/edit';
            _this.packageService.updatePackageData(data);
            //navigate
            _this.router.navigate(['../', 'edit'], { relativeTo: _this.route });
        });
    };
    PackageTemplateComponent.prototype.selectAndStart = function (template) {
        var _this = this;
        var data = { "active_template": template.template_id };
        this.apiService.setActiveTemplate(template.template_id, this.package_id, data).subscribe(function (res) {
            _this.apiService.startWorkflow(_this.package.package_id);
            _this.router.navigate(['packages', _this.package.package_id, 'status']);
        });
    };
    PackageTemplateComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Services_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"] }
    ]; };
    PackageTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packageTemplate',
            template: __importDefault(__webpack_require__(/*! raw-loader!./PackageTemplate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/PackageDetail/PackageTemplate.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./PackageTemplate.component.sass */ "./src/app/PackageDetail/PackageTemplate.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_2__["APIService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]])
    ], PackageTemplateComponent);
    return PackageTemplateComponent;
}());



/***/ }),

/***/ "./src/app/Packages/PackageList.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/Packages/PackageList.component.sass ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".emptyList {\n  height: 400px;\n  width: 100%;\n  background-color: #eee;\n  display: table;\n  padding: 0px 40px;\n}\n.emptyList p {\n  display: table-cell;\n  vertical-align: middle;\n  color: #444;\n}\n.table {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL1BhY2thZ2VzL1BhY2thZ2VMaXN0LmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9QYWNrYWdlcy9QYWNrYWdlTGlzdC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREFFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNFSjtBREFBO0VBQ0UsU0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvUGFja2FnZXMvUGFja2FnZUxpc3QuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wdHlMaXN0XG4gIGhlaWdodDogNDAwcHhcbiAgd2lkdGg6IDEwMCVcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZVxuICBkaXNwbGF5OiB0YWJsZVxuICBwYWRkaW5nOiAwcHggNDBweFxuICBwXG4gICAgZGlzcGxheTogdGFibGUtY2VsbFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcbiAgICBjb2xvcjogIzQ0NFxuXG4udGFibGVcbiAgbWFyZ2luOiAwXG4iLCIuZW1wdHlMaXN0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwYWRkaW5nOiAwcHggNDBweDtcbn1cbi5lbXB0eUxpc3QgcCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4udGFibGUge1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/Packages/PackageList.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Packages/PackageList.component.ts ***!
  \***************************************************/
/*! exports provided: PackageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageListComponent", function() { return PackageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PackageListComponent = /** @class */ (function () {
    function PackageListComponent(apiService) {
        this.apiService = apiService;
        this.packages = [];
    }
    PackageListComponent.prototype.ngOnInit = function () {
        this.updateData();
    };
    PackageListComponent.prototype.updateData = function () {
        var _this = this;
        this.apiService.getPackages().subscribe(function (data) {
            _this.packages = data.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            console.log(_this.packages);
        }, function (error) {
            _this.packages = [];
        });
    };
    PackageListComponent.prototype.isListEmpty = function () {
        if (this.packages.length <= 0) {
            return true;
        }
        return false;
    };
    PackageListComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] }
    ]; };
    PackageListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packages',
            template: __importDefault(__webpack_require__(/*! raw-loader!./PackageList.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Packages/PackageList.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./PackageList.component.sass */ "./src/app/Packages/PackageList.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"]])
    ], PackageListComponent);
    return PackageListComponent;
}());



/***/ }),

/***/ "./src/app/Packages/Packages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Packages/Packages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PackagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesRoutingModule", function() { return PackagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Packages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Packages.component */ "./src/app/Packages/Packages.component.ts");
/* harmony import */ var _PackageList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PackageList.component */ "./src/app/Packages/PackageList.component.ts");
/* harmony import */ var _PackageDetail_PackageDetail_routing_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PackageDetail/PackageDetail-routing.routes */ "./src/app/PackageDetail/PackageDetail-routing.routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var packagesRoutes = [
    { path: 'packages', component: _Packages_component__WEBPACK_IMPORTED_MODULE_2__["PackagesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], children: [
            { path: '', component: _PackageList_component__WEBPACK_IMPORTED_MODULE_3__["PackageListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
        ].concat(_PackageDetail_PackageDetail_routing_routes__WEBPACK_IMPORTED_MODULE_4__["packageRoutes"]) },
];
var PackagesRoutingModule = /** @class */ (function () {
    function PackagesRoutingModule() {
    }
    PackagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(packagesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PackagesRoutingModule);
    return PackagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/Packages/Packages.component.ts":
/*!************************************************!*\
  !*** ./src/app/Packages/Packages.component.ts ***!
  \************************************************/
/*! exports provided: PackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PackagesComponent = /** @class */ (function () {
    function PackagesComponent() {
        this.packages = [];
    }
    PackagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'packages',
            template: __importDefault(__webpack_require__(/*! raw-loader!./Packages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Packages/Packages.component.html")).default,
        }),
        __metadata("design:paramtypes", [])
    ], PackagesComponent);
    return PackagesComponent;
}());



/***/ }),

/***/ "./src/app/Packages/Packages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Packages/Packages.module.ts ***!
  \*********************************************/
/*! exports provided: PackagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesModule", function() { return PackagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Packages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Packages.component */ "./src/app/Packages/Packages.component.ts");
/* harmony import */ var _PackageList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PackageList.component */ "./src/app/Packages/PackageList.component.ts");
/* harmony import */ var _PackageDetail_Package_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PackageDetail/Package.module */ "./src/app/PackageDetail/Package.module.ts");
/* harmony import */ var _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/Navbar/Navbar.module */ "./src/app/Components/Navbar/Navbar.module.ts");
/* harmony import */ var _Packages_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Packages-routing.module */ "./src/app/Packages/Packages-routing.module.ts");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// components


// modules



//services

var PackagesModule = /** @class */ (function () {
    function PackagesModule() {
    }
    PackagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _PackageDetail_Package_module__WEBPACK_IMPORTED_MODULE_5__["PackageModule"],
                _Packages_routing_module__WEBPACK_IMPORTED_MODULE_7__["PackagesRoutingModule"],
                _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
            ],
            declarations: [
                _Packages_component__WEBPACK_IMPORTED_MODULE_3__["PackagesComponent"],
                _PackageList_component__WEBPACK_IMPORTED_MODULE_4__["PackageListComponent"],
            ],
            providers: [_Services_api_service__WEBPACK_IMPORTED_MODULE_8__["APIService"]],
        })
    ], PackagesModule);
    return PackagesModule;
}());



/***/ }),

/***/ "./src/app/Services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var APIService = /** @class */ (function () {
    function APIService(http) {
        this.http = http;
    }
    // Modules
    APIService.prototype.getModules = function () {
        return this.http.get('/api/module/');
    };
    APIService.prototype.createModule = function (data) {
        return this.http.put('/api/module/', data);
    };
    APIService.prototype.deleteModule = function (module_id) {
        return this.http.delete('/api/module/' + module_id + '/');
    };
    APIService.prototype.saveData = function (id, data) {
        return this.http.post("/api/module/" + id + "/", data);
    };
    APIService.prototype.importModule = function (formData) {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', '/api/module/import/', formData, {
            reportProgress: true
        });
        return this.http.request(req);
    };
    // templates
    APIService.prototype.getTemplates = function () {
        return this.http.get('/api/template/');
    };
    APIService.prototype.getTemplate = function (id) {
        return this.http.get('/api/template/' + id + '/');
    };
    APIService.prototype.postTemplate = function (data) {
        return this.http.post('/api/template/', data);
    };
    APIService.prototype.deleteTemplate = function (template_id) {
        return this.http.delete('/api/template/' + template_id + '/');
    };
    APIService.prototype.setActiveTemplate = function (template_id, package_id, data) {
        return this.http.put('/api/template/' + template_id + '/package/' + package_id + '/', data);
    };
    // processes
    APIService.prototype.addProcess = function (process) {
        return this.http.post('/api/process/', process);
    };
    APIService.prototype.reorderTemplateProcesses = function (data, template_id) {
        return this.http.put('/api/template/' + template_id + '/process/', data);
    };
    APIService.prototype.reorderPackageProcesses = function (data, package_id) {
        return this.http.put('/api/package/' + package_id + '/process/', data);
    };
    APIService.prototype.deleteProcess = function (id) {
        return this.http.delete('/api/process/' + id + '/');
    };
    APIService.prototype.saveProcess = function (data, id) {
        return this.http.put('/api/process/' + id + '/', data);
    };
    APIService.prototype.getLogFile = function (path, process_id) {
        return this.http.get('/process/' + process_id + '/' + path, { responseType: 'text' });
    };
    APIService.prototype.getProcessLogs = function (id) {
        return this.http.get('/api/process/' + id + '/logs/');
    };
    // variables
    APIService.prototype.getVariables = function () {
        return this.http.get('/api/variables/global/');
    };
    APIService.prototype.setVariables = function (data) {
        return this.http.post('/api/variables/global/', data);
    };
    // stats
    APIService.prototype.getStatsDashboard = function () {
        return this.http.get('/api/stats/dashboard/');
    };
    // package
    APIService.prototype.getPackages = function () {
        return this.http.get('/api/package/');
    };
    APIService.prototype.getPackage = function (id) {
        return this.http.get('/api/package/' + id + '/');
    };
    APIService.prototype.removePackage = function (id) {
        return this.http.delete('/api/package/' + id + '/');
    };
    APIService.prototype.startWorkflow = function (package_id) {
        this.http.post('/api/package/' + package_id + '/execute/', {}).subscribe(function () {
        });
    };
    APIService.prototype.finishPackage = function (package_id) {
        this.http.post('/api/package/' + package_id + '/finish/', {}).subscribe(function () {
        });
    };
    APIService.prototype.abortPackage = function (packageId) {
        return this.http.post('/api/package/' + packageId + '/abort/', {});
    };
    // files
    APIService.prototype.getFiles = function (path, specific) {
        if (specific === void 0) { specific = ''; }
        return this.http.get(path + '?path=' + specific);
    };
    APIService.prototype.renameFile = function (path, body) {
        return this.http.put(path, body);
    };
    APIService.prototype.deleteFile = function (path, specific) {
        return this.http.delete(path + '?path=' + specific);
    };
    APIService.prototype.uploadFile = function (path, formData) {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', path, formData, {});
        return this.http.request(req);
    };
    APIService.prototype.createFolder = function (path, specific) {
        return this.http.put(path, { path: specific });
    };
    // docker
    APIService.prototype.getDockerImages = function () {
        return this.http.get('/api/image/');
    };
    APIService.prototype.saveDockerImage = function (image_id, data) {
        return this.http.post('/api/image/' + image_id + '/', data);
    };
    APIService.prototype.importDockerImage = function (formData) {
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', '/api/image/import/', formData, {
            reportProgress: true
        });
        return this.http.request(req);
    };
    APIService.prototype.deleteDockerImage = function (image_id) {
        return this.http.delete('/api/image/' + image_id + '/');
    };
    APIService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    APIService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], APIService);
    return APIService;
}());



/***/ }),

/***/ "./src/app/Services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService, ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

// import { AuthenticationService } from '../_services';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.username = "";
        this.token = "";
        this.permissions = [];
        this.permissionsLoaded = false;
        this.permissionClass = "";
        this.token = localStorage.getItem("access_token");
        this.username = localStorage.getItem("username");
        this.loadPermissions();
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http
            .post("/auth/api-token-auth/", {
            username: username,
            password: password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            // login successful if there's a jwt token in the response
            if (res && res.token) {
                _this.token = res.token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("access_token", res.token);
                localStorage.setItem("username", username);
                _this.username = username;
                _this.loadToken();
                //get permission information.
                _this.loadPermissions();
            }
        }));
    };
    AuthenticationService.prototype.loadToken = function () {
        var base64Url = this.token.split(".")[1];
        var base64 = base64Url.replace("-", "+").replace("_", "/");
        this.payload = JSON.parse(window.atob(base64));
    };
    AuthenticationService.prototype.logout = function (navigate) {
        if (navigate === void 0) { navigate = true; }
        // console.log('sign out');
        // remove user from local storage to log user out
        localStorage.removeItem("access_token");
        localStorage.removeItem("username");
        //navigate to dashboard
        if (navigate) {
            this.router.navigate(["/login"], {
                queryParams: { message: "Sign out successful", type: "alert-success" }
            });
        }
    };
    AuthenticationService.prototype.getUsername = function () {
        return this.username;
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        if (localStorage.getItem("access_token")) {
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.loadPermissions = function () {
        var _this = this;
        // console.log('get Permission')
        if (!this.permissionsLoaded) {
            // console.log('get request')
            // console.log(this.permissionsLoaded);
            this.permissionsLoaded = true;
            if (this.token != "") {
                // console.log(this.token)
                setTimeout(function () {
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                    headers.append("Authorization", "JWT " + _this.token);
                    _this.http
                        .get("/api/permissions/", { headers: headers })
                        .subscribe(function (data) {
                        // console.log(data);
                        if (data != null && data["admin"]) {
                            _this.permissionClass = "admin";
                        }
                        else {
                            _this.permissionClass = "none";
                        }
                    });
                }, 100);
            }
        }
    };
    AuthenticationService.prototype.getRequestPermissions = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append("Authorization", "JWT " + this.token);
        return this.http.get("/api/permissions/", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            // console.log(data);
            if (data != null && data["admin"]) {
                _this.permissionClass = "admin";
            }
            else {
                _this.permissionClass = "none";
            }
            return data;
        }));
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());

var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, router, route) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // console.log('intercept 401')
                // auto logout if 401 response returned from api
                _this.authenticationService.logout(false);
                _this.router.navigate(["/login"], {
                    queryParams: {
                        message: "Session has expired, please sign in again",
                        type: "alert-danger",
                        returnUrl: _this.router.url
                    }
                });
            }
            // const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: AuthenticationService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [AuthenticationService,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/Services/models.ts":
/*!************************************!*\
  !*** ./src/app/Services/models.ts ***!
  \************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Module = /** @class */ (function () {
    function Module() {
    }
    return Module;
}());



/***/ }),

/***/ "./src/app/Services/package.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/package.service.ts ***!
  \*********************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PackageService = /** @class */ (function () {
    function PackageService() {
        this.packageEmitter$ = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PackageService.prototype.updatePackageData = function (packageData) {
        this.packageEmitter$.emit(packageData);
    };
    return PackageService;
}());



/***/ }),

/***/ "./src/app/Utilities.ts":
/*!******************************!*\
  !*** ./src/app/Utilities.ts ***!
  \******************************/
/*! exports provided: formatBytes, GraphColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBytes", function() { return formatBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphColors", function() { return GraphColors; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function formatBytes(o) {
    var sizes = [
        'Bytes',
        'KB',
        'MB',
        'GB',
        'TB',
        'PB'
    ];
    var size = o;
    var index = 0;
    while (size / 1000 > 0.1) {
        size = size / 1000;
        index += 1;
    }
    size = Math.floor(size * 1000) / 1000;
    return size + ' ' + sizes[index];
}
var GraphColors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6',
    '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#95a5a6', '#16a085', '#27ae60',
    '#2980b9', '#8e44ad', '#2c3e50', '#f39c12', '#d35400', '#c0392b', '#7f8c8d'];


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Admin_admin_routing_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Admin/admin-routing.routes */ "./src/app/Admin/admin-routing.routes.ts");
/* harmony import */ var _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard/Dashboard.component */ "./src/app/Dashboard/Dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _NotFound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NotFound.component */ "./src/app/NotFound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var appRoutes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
].concat(_Admin_admin_routing_routes__WEBPACK_IMPORTED_MODULE_2__["adminRoutes"], [
    { path: '**', component: _NotFound_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes
                // { enableTracing: true } // <-- Enable for navigation debugging
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\nbody {\n  font-size: 0.875rem;\n}\n\n/* Sidebar */\n\n.sidebar {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  padding: 48px 0 0;\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);\n  width: 220px;\n  max-width: 220px;\n}\n\n.sidebar-sticky {\n  position: relative;\n  top: 0;\n  height: calc(100vh - 48px);\n  padding-top: 0.5rem;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sidebar-sticky {\n    position: -webkit-sticky;\n    position: sticky;\n  }\n}\n\n.sidebar .nav-link {\n  font-weight: 500;\n  color: #333;\n}\n\n.sidebar .nav-link.active {\n  color: #bc044e;\n  background-color: #cbcbcb;\n}\n\n.sidebar .nav-link:hover {\n  background-color: #dddddd;\n}\n\n.sidebar .nav-link:hover .active,\n.sidebar .nav-link.active .active {\n  color: inherit;\n}\n\n.sidebar-heading {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n}\n\n/* Content */\n\n[role=main] {\n  padding-top: 48px;\n}\n\n/* Navbar */\n\n/* .navbar-brand\n * * padding-top: .75rem\n * * padding-bottom: .75rem\n * * font-size: 1rem\n * * margin: 0\n * * margin-top: -10px\n * * background-color: rgba(0, 0, 0, .75)\n * * box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25) */\n\n.navbar-brand a {\n  color: white;\n}\n\n.navbar .form-control {\n  padding: 0.75rem 1rem;\n  border-width: 0;\n  border-radius: 0;\n}\n\n.form-control-dark {\n  color: #fff;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.1);\n}\n\n.form-control-dark:focus {\n  border-color: transparent;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);\n}\n\n/* Utilities */\n\n.material-icons {\n  float: left;\n  margin-right: 20px;\n}\n\n.main-view {\n  /* margin-left: 220px */\n  width: calc(100% - 220px);\n  min-width: calc(100% - 220px);\n  max-width: calc(100% - 220px);\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLFlBQUE7QUNIRjs7QURLQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNJLFlBQUE7RUFDQSx5QkFoQm9CO0VBa0JwQixtQkFBQTtFQUNBLFdBQUE7QUNISjs7QURLQTtFQUNJLDBDQUFBO0FDRko7O0FES0U7RUFDRSxXQUFBO0FDRko7O0FESUE7RUFDRSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDREY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBQ3BEQTtFQUNFLG1CQUFBO0FEdURGOztBQ3JEQSxZQUFBOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEdURGOztBQ3JEQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEd0RGOztBQ3REQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxnQkFBQTtFRHlERjtBQUNGOztBQ3ZERTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBRHlESjs7QUN2REk7RUFDRSxjRm5Da0I7RUVvQ2xCLHlCQUFBO0FEeUROOztBQ3ZESTtFQUNFLHlCQUFBO0FEeUROOztBQ3ZEQTs7RUFFRSxjQUFBO0FEMERGOztBQ3hEQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUQyREY7O0FDekRBLFlBQUE7O0FBRUE7RUFDRSxpQkFBQTtBRDJERjs7QUN6REEsV0FBQTs7QUFFQTs7Ozs7OztvREFBQTs7QUFTQTtFQUNFLFlBQUE7QUQwREY7O0FDeERBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQyREY7O0FDekRBO0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VBQ0Esc0NBQUE7QUQ0REY7O0FDMURBO0VBQ0UseUJBQUE7RUFDQSwrQ0FBQTtBRDZERjs7QUMzREEsY0FBQTs7QUFLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBRDBERjs7QUN4REE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUQyREYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwXG4vLyAgIGNvbG9yOiByZWRcbiRjb21wYW55LWNvbG9yLXByaW1hcnk6ICNiYzA0NGVcblxuaHRtbFxuICBoZWlnaHQ6IDEwMCVcblxuLm5vc2VsZWN0XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZVxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZVxuICAtbW96LXVzZXItc2VsZWN0OiBub25lXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZVxuICB1c2VyLXNlbGVjdDogbm9uZVxuXG5cbi5jb21wYW55LXRhYmxlLWhlYWRcbiAgICBib3JkZXI6IG5vbmVcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcGFueS1jb2xvci1wcmltYXJ5XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzk5OVxuICAgIC8qIGNvbG9yOiAjYmMwNDRlICovXG4gICAgY29sb3I6ICNlZWVcblxuLnRhYmxlXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpXG5cbmJ1dHRvblxuICAmLmJ0blxuICAgIG1hcmdpbjogMnB4XG5cbi5yZWZyZXNoXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gIGJvcmRlcjogMFxuICBjb2xvcjogd2hpdGVcbiAgLyogbWFyZ2luLWxlZnQ6IDgwcHggKi9cbiAgZmxvYXQ6IHJpZ2h0XG4gIGNvbG9yOiBpbmhlcml0XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4XG5cbi5pY29uLWJ1dHRvbjpob3ZlclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1XG4gIGJvcmRlci1yYWRpdXM6IDJweFxuICBjb2xvcjogd2hpdGVcblxuLmRyYWctaGFuZGxlXG4gIGN1cnNvcjogZ3JhYlxuXG5cbi5jYXJkXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcblxuLmljb24tc21hbGxcbiAgZm9udC1zaXplOiAxZW1cbiIsImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uY29tcGFueS10YWJsZS1oZWFkIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmMwNDRlO1xuICAvKiBjb2xvcjogI2JjMDQ0ZSAqL1xuICBjb2xvcjogI2VlZTtcbn1cblxuLnRhYmxlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG5idXR0b24uYnRuIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5yZWZyZXNoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBtYXJnaW4tbGVmdDogODBweCAqL1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmljb24tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1YjViNTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kcmFnLWhhbmRsZSB7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaWNvbi1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuLyogU2lkZWJhciAqL1xuLnNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIHBhZGRpbmc6IDQ4cHggMCAwO1xuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAyMjBweDtcbiAgbWF4LXdpZHRoOiAyMjBweDtcbn1cblxuLnNpZGViYXItc3RpY2t5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ4cHgpO1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbkBzdXBwb3J0cyAocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSkge1xuICAuc2lkZWJhci1zdGlja3kge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICB9XG59XG4uc2lkZWJhciAubmF2LWxpbmsge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzMztcbn1cbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogI2JjMDQ0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYjtcbn1cbi5zaWRlYmFyIC5uYXYtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG59XG5cbi5zaWRlYmFyIC5uYXYtbGluazpob3ZlciAuYWN0aXZlLFxuLnNpZGViYXIgLm5hdi1saW5rLmFjdGl2ZSAuYWN0aXZlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlYmFyLWhlYWRpbmcge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8qIENvbnRlbnQgKi9cbltyb2xlPW1haW5dIHtcbiAgcGFkZGluZy10b3A6IDQ4cHg7XG59XG5cbi8qIE5hdmJhciAqL1xuLyogLm5hdmJhci1icmFuZFxuICogKiBwYWRkaW5nLXRvcDogLjc1cmVtXG4gKiAqIHBhZGRpbmctYm90dG9tOiAuNzVyZW1cbiAqICogZm9udC1zaXplOiAxcmVtXG4gKiAqIG1hcmdpbjogMFxuICogKiBtYXJnaW4tdG9wOiAtMTBweFxuICogKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43NSlcbiAqICogYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpICovXG4ubmF2YmFyLWJyYW5kIGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXIgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZm9ybS1jb250cm9sLWRhcmsge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbi8qIFV0aWxpdGllcyAqL1xuLm1hdGVyaWFsLWljb25zIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1haW4tdmlldyB7XG4gIC8qIG1hcmdpbi1sZWZ0OiAyMjBweCAqL1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjIwcHgpO1xuICBtaW4td2lkdGg6IGNhbGMoMTAwJSAtIDIyMHB4KTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweCk7XG4gIGZsb2F0OiBsZWZ0O1xufSIsIkBpbXBvcnQgLi4vc3R5bGVzXG5cbmJvZHlcbiAgZm9udC1zaXplOiAwLjg3NXJlbVxuXG4vKiBTaWRlYmFyXG5cbi5zaWRlYmFyXG4gIHBvc2l0aW9uOiBmaXhlZFxuICB0b3A6IDBcbiAgYm90dG9tOiAwXG4gIGxlZnQ6IDBcbiAgei1pbmRleDogMTAwXG4gIHBhZGRpbmc6IDQ4cHggMCAwXG4gIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4xKVxuICB3aWR0aDogMjIwcHhcbiAgbWF4LXdpZHRoOiAyMjBweFxuXG4uc2lkZWJhci1zdGlja3lcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIHRvcDogMFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KVxuICBwYWRkaW5nLXRvcDogMC41cmVtXG4gIG92ZXJmbG93LXg6IGhpZGRlblxuICBvdmVyZmxvdy15OiBhdXRvXG5cbkBzdXBwb3J0cyAocG9zaXRpb246IC13ZWJraXQtc3RpY2t5KSBvciAocG9zaXRpb246IHN0aWNreSlcbiAgLnNpZGViYXItc3RpY2t5XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5XG4gICAgcG9zaXRpb246IHN0aWNreVxuXG4uc2lkZWJhclxuICAubmF2LWxpbmtcbiAgICBmb250LXdlaWdodDogNTAwXG4gICAgY29sb3I6ICMzMzNcblxuICAgICYuYWN0aXZlXG4gICAgICBjb2xvcjogJGNvbXBhbnktY29sb3ItcHJpbWFyeVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NiY2JjYlxuXG4gICAgJjpob3ZlclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZFxuXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmFjdGl2ZSxcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmFjdGl2ZVxuICBjb2xvcjogaW5oZXJpdFxuXG4uc2lkZWJhci1oZWFkaW5nXG4gIGZvbnQtc2l6ZTogMC43NXJlbVxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXG5cbi8qIENvbnRlbnRcblxuW3JvbGU9XCJtYWluXCJdXG4gIHBhZGRpbmctdG9wOiA0OHB4XG5cbi8qIE5hdmJhclxuXG4vKiAubmF2YmFyLWJyYW5kXG4gKiBwYWRkaW5nLXRvcDogLjc1cmVtXG4gKiBwYWRkaW5nLWJvdHRvbTogLjc1cmVtXG4gKiBmb250LXNpemU6IDFyZW1cbiAqIG1hcmdpbjogMFxuICogbWFyZ2luLXRvcDogLTEwcHhcbiAqIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjc1KVxuICogYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMjUpXG5cbi5uYXZiYXItYnJhbmQgYVxuICBjb2xvcjogd2hpdGVcblxuLm5hdmJhciAuZm9ybS1jb250cm9sXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbVxuICBib3JkZXItd2lkdGg6IDBcbiAgYm9yZGVyLXJhZGl1czogMFxuXG4uZm9ybS1jb250cm9sLWRhcmtcbiAgY29sb3I6ICNmZmZcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXG5cbi5mb3JtLWNvbnRyb2wtZGFyazpmb2N1c1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpXG5cbi8qIFV0aWxpdGllc1xuXG4vLyAvKiAuYm9yZGVyLXRvcCAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTVcbi8vIC5ib3JkZXItYm90dG9tICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U1ZTVlNVxuXG4ubWF0ZXJpYWwtaWNvbnNcbiAgZmxvYXQ6IGxlZnRcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4XG5cbi5tYWluLXZpZXdcbiAgLyogbWFyZ2luLWxlZnQ6IDIyMHB4XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweClcbiAgbWluLXdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweClcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyMjBweClcbiAgZmxvYXQ6IGxlZnRcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authClass = 'none';
        this.authClass = 'none';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .subscribe(function (event) {
            _this.authService.getRequestPermissions()
                .subscribe(function (res) {
                _this.authClass = _this.authService.permissionClass;
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Dashboard_combo_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dashboard/combo-chart.component */ "./src/app/Dashboard/combo-chart.component.ts");
/* harmony import */ var _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dashboard/Dashboard.component */ "./src/app/Dashboard/Dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _NotFound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NotFound.component */ "./src/app/NotFound.component.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _Admin_admin_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Admin/admin.module */ "./src/app/Admin/admin.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/Message/Message.module */ "./src/app/Components/Message/Message.module.ts");
/* harmony import */ var _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/Navbar/Navbar.module */ "./src/app/Components/Navbar/Navbar.module.ts");
/* harmony import */ var _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/Tooltip/Tooltip.module */ "./src/app/Components/Tooltip/Tooltip.module.ts");
/* harmony import */ var _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Packages/Packages.module */ "./src/app/Packages/Packages.module.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Services/authentication.service */ "./src/app/Services/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// JWT authentication

var tokenGetter = function () { return (localStorage.getItem('access_token')); };













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _Dashboard_Dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _Dashboard_combo_chart_component__WEBPACK_IMPORTED_MODULE_7__["ComboChartComponent"],
                _NotFound_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost'],
                        blacklistedRoutes: ['localhost/auth/'],
                        authScheme: 'JWT '
                    }
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
                _Components_Tooltip_Tooltip_module__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"],
                _Components_Navbar_Navbar_module__WEBPACK_IMPORTED_MODULE_15__["NavbarModule"],
                _Packages_Packages_module__WEBPACK_IMPORTED_MODULE_17__["PackagesModule"],
                _Admin_admin_module__WEBPACK_IMPORTED_MODULE_12__["AdminModule"],
                _Components_Message_Message_module__WEBPACK_IMPORTED_MODULE_14__["MessageModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
                    useClass: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["ErrorInterceptor"],
                    multi: true
                },
                _Services_authentication_service__WEBPACK_IMPORTED_MODULE_18__["AuthenticationService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




// import { map } from 'rxjs/operators';

// import { of } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';
// import { of } from 'rxjs/observable/of'
var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.getRequestPermissions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            console.log(data);
            if (data['admin']) {
                return true;
            }
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" } });
            return false;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }));
        // .subscribe(e => {
        //   if (e) {
        //     return of(true);
        //   }
        // }, () => {
        //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" }});
        //   return of(false);
        // })
        // .subscribe(data => {
        // if (this.authService.permissionClass == "admin") {
        //   return true;
        // }
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, message: "You need to have admin permissions to access this" }});
        // return false;
        // })
    };
    AdminGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        //   console.log(localStorage.getItem('access_token'));
        if (localStorage.getItem('access_token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  height: 100%;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.company-table-head {\n  border: none;\n  background-color: #bc044e;\n  /* color: #bc044e */\n  color: #eee;\n}\n\n.table {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n\nbutton.btn {\n  margin: 2px;\n}\n\n.refresh {\n  background-color: transparent;\n  border: 0;\n  color: white;\n  /* margin-left: 80px */\n  float: right;\n  color: inherit;\n  margin-bottom: -10px;\n}\n\n.icon-button:hover {\n  background-color: #b5b5b5;\n  border-radius: 2px;\n  color: white;\n}\n\n.drag-handle {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.card {\n  margin-bottom: 10px;\n}\n\n.icon-small {\n  font-size: 1em;\n}\n\n.numberRow {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  margin: 0;\n  margin-bottom: 10px;\n  padding: 10px;\n}\n\n.numberTitle {\n  margin: 0;\n}\n\n.divider::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  height: 52px;\n  border-left: 2px solid rgba(188, 4, 78, 0.5);\n  margin-top: 10px;\n}\n\n.number {\n  font-size: 2em;\n  font-weight: bold;\n  margin: 0;\n  opacity: 0.5;\n}\n\n.number.errors {\n  color: red;\n}\n\n.half-graph {\n  margin: 0;\n  margin-bottom: 10px;\n}\n\n.half-graph .card {\n  padding-right: 40px;\n}\n\n.half-graph .card .card-body {\n  height: 200px;\n  padding: 0;\n}\n\n.filetypes {\n  height: 300px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9heGVudS9Qcm9qZWN0cy9TeWRhcmtpdmVyYS9BUFAvQW5ndWxhci9zcmMvc3R5bGVzLnNhc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIiwiL1VzZXJzL2F4ZW51L1Byb2plY3RzL1N5ZGFya2l2ZXJhL0FQUC9Bbmd1bGFyL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxZQUFBO0FDSEY7O0FES0E7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FES0E7RUFDSSxZQUFBO0VBQ0EseUJBaEJvQjtFQWtCcEIsbUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0E7RUFDSSwwQ0FBQTtBQ0ZKOztBREtFO0VBQ0UsV0FBQTtBQ0ZKOztBRElBO0VBQ0UsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0RGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsWUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QUNwREE7RUFDRSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBRHVERjs7QUNyREE7RUFDRSxTQUFBO0FEd0RGOztBQ3REQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtBRHlERjs7QUN2REE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBRDBERjs7QUN4REU7RUFDRSxVQUFBO0FEMERKOztBQ3hEQTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtBRDJERjs7QUN6REU7RUFDRSxtQkFBQTtBRDJESjs7QUN6REk7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBRDJETjs7QUN6REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUQ0REYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBcbi8vICAgY29sb3I6IHJlZFxuJGNvbXBhbnktY29sb3ItcHJpbWFyeTogI2JjMDQ0ZVxuXG5odG1sXG4gIGhlaWdodDogMTAwJVxuXG4ubm9zZWxlY3RcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmVcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmVcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lXG4gIHVzZXItc2VsZWN0OiBub25lXG5cblxuLmNvbXBhbnktdGFibGUtaGVhZFxuICAgIGJvcmRlcjogbm9uZVxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb21wYW55LWNvbG9yLXByaW1hcnlcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5XG4gICAgLyogY29sb3I6ICNiYzA0NGUgKi9cbiAgICBjb2xvcjogI2VlZVxuXG4udGFibGVcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMilcblxuYnV0dG9uXG4gICYuYnRuXG4gICAgbWFyZ2luOiAycHhcblxuLnJlZnJlc2hcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbiAgYm9yZGVyOiAwXG4gIGNvbG9yOiB3aGl0ZVxuICAvKiBtYXJnaW4tbGVmdDogODBweCAqL1xuICBmbG9hdDogcmlnaHRcbiAgY29sb3I6IGluaGVyaXRcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHhcblxuLmljb24tYnV0dG9uOmhvdmVyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiNWI1YjVcbiAgYm9yZGVyLXJhZGl1czogMnB4XG4gIGNvbG9yOiB3aGl0ZVxuXG4uZHJhZy1oYW5kbGVcbiAgY3Vyc29yOiBncmFiXG5cblxuLmNhcmRcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxuXG4uaWNvbi1zbWFsbFxuICBmb250LXNpemU6IDFlbVxuIiwiaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5vc2VsZWN0IHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5jb21wYW55LXRhYmxlLWhlYWQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYzA0NGU7XG4gIC8qIGNvbG9yOiAjYmMwNDRlICovXG4gIGNvbG9yOiAjZWVlO1xufVxuXG4udGFibGUge1xuICBib3gtc2hhZG93OiAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmJ1dHRvbi5idG4ge1xuICBtYXJnaW46IDJweDtcbn1cblxuLnJlZnJlc2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIG1hcmdpbi1sZWZ0OiA4MHB4ICovXG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufVxuXG4uaWNvbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjViNWI1O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyYWctaGFuZGxlIHtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pY29uLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5udW1iZXJSb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubnVtYmVyVGl0bGUge1xuICBtYXJnaW46IDA7XG59XG5cbi5kaXZpZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNTJweDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKDE4OCwgNCwgNzgsIDAuNSk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5udW1iZXIge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgb3BhY2l0eTogMC41O1xufVxuLm51bWJlci5lcnJvcnMge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaGFsZi1ncmFwaCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5oYWxmLWdyYXBoIC5jYXJkIHtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5oYWxmLWdyYXBoIC5jYXJkIC5jYXJkLWJvZHkge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmlsZXR5cGVzIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCJAaW1wb3J0IC4uLy4uL3N0eWxlc1xuXG4ubnVtYmVyUm93XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW1cbiAgbWFyZ2luOiAwXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcbiAgcGFkZGluZzogMTBweFxuXG4ubnVtYmVyVGl0bGVcbiAgbWFyZ2luOiAwXG5cbi5kaXZpZGVyOjpiZWZvcmVcbiAgY29udGVudDogXCJcIlxuICBwb3NpdGlvbjogYWJzb2x1dGVcbiAgbGVmdDogMFxuICBoZWlnaHQ6IDUycHhcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCByZ2JhKCRjb21wYW55LWNvbG9yLXByaW1hcnksIDAuNSlcbiAgbWFyZ2luLXRvcDogMTBweFxuXG4ubnVtYmVyXG4gIGZvbnQtc2l6ZTogMmVtXG4gIGZvbnQtd2VpZ2h0OiBib2xkXG4gIG1hcmdpbjogMFxuICBvcGFjaXR5OiAwLjVcblxuICAmLmVycm9yc1xuICAgIGNvbG9yOiByZWRcblxuLmhhbGYtZ3JhcGhcbiAgbWFyZ2luOiAwXG4gIG1hcmdpbi1ib3R0b206IDEwcHhcblxuICAuY2FyZFxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHhcblxuICAgIC5jYXJkLWJvZHlcbiAgICAgIGhlaWdodDogMjAwcHhcbiAgICAgIHBhZGRpbmc6IDBcblxuLmZpbGV0eXBlc1xuICBoZWlnaHQ6IDMwMHB4XG4gIG1hcmdpbi1ib3R0b206IDEwcHhcbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Services/api.service.ts");
/* harmony import */ var _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/authentication.service */ "./src/app/Services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(apiService, route, authService, router) {
        this.apiService = apiService;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.username = "";
        this.password = "";
        this.usernameError = "";
        this.passwordError = "";
        this.modalActive = false;
        this.modalMessage = "";
        this.modalType = "alert-success";
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if ("message" in params) {
                _this.modalMessage = params["message"];
                _this.modalActive = true;
                if ("type" in params) {
                    _this.modalType = params["type"];
                }
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var validated = true;
        //verify username and password
        if (this.username == "") {
            this.usernameError = "Username can't be empty";
            validated = false;
        }
        if (this.password == "") {
            this.passwordError = "Password can't be empty";
            validated = false;
        }
        if (!validated) {
            return;
        }
        this.authService.login(this.username, this.password).subscribe(function (data) {
            //redirect to returnUrl
            _this.route.queryParams.subscribe(function (params) {
                // console.log(params["returnUrl"]);
                if (!("returnUrl" in params) || !params["returnUrl"]) {
                    _this.router.navigate(["/"]);
                    return;
                }
                if (params["returnUrl"].length > 100) {
                    _this.router.navigate(["/"]);
                    return;
                }
                _this.router.navigate([params["returnUrl"]]);
            });
        }, function (error) {
            //display error
            _this.modalMessage = "Wrong username or password";
            _this.modalActive = true;
            _this.modalType = "alert-danger";
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "login",
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")).default]
        }),
        __metadata("design:paramtypes", [_Services_api_service__WEBPACK_IMPORTED_MODULE_1__["APIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _Services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/axenu/Projects/Sydarkivera/APP/Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map