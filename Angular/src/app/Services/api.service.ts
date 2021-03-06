import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DockerImportImage, Module, Variables, DockerImage } from '@app/Services/models';
import { Observable } from 'rxjs';

@Injectable()
export class APIService {

  constructor(private readonly http: HttpClient) { }

  // Modules

  getModules() {
    return this.http.get('/api/module/');
  }

  createModule(data: Module): Observable<Module> {
    return this.http.put<Module>('/api/module/', data);
  }

  deleteModule(module_id) {
    return this.http.delete('/api/module/' + module_id + '/');
  }

  saveData(id: string, data: Module): Observable<Module> {
    return this.http.post<Module>(`/api/module/${id}/`, data);
  }

  importModule(formData) {
    const req = new HttpRequest('POST', '/api/module/import/', formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  // templates

  getTemplates() {
    return this.http.get('/api/template/');
  }

  getTemplate(id) {
    return this.http.get('/api/template/' + id + '/');
  }

  postTemplate(data) {
    return this.http.post('/api/template/', data);
  }

  deleteTemplate(template_id) {
    return this.http.delete('/api/template/' + template_id + '/');
  }

  setActiveTemplate(template_id: number, package_id: number, data) {
    return this.http.put('/api/template/' + template_id + '/package/' + package_id + '/', data);
  }

  // processes

  addProcess(process) {
    return this.http.post('/api/process/', process);
  }

  reorderTemplateProcesses(data, template_id) {
    return this.http.put('/api/template/' + template_id + '/process/', data);
  }

  reorderPackageProcesses(data, package_id) {
    return this.http.put('/api/package/' + package_id + '/process/', data);
  }

  deleteProcess(id) {
    return this.http.delete('/api/process/' + id + '/');
  }

  saveProcess(data, id) {
    return this.http.put('/api/process/' + id + '/', data);
  }

  getLogFile(path, process_id) {
    return this.http.get('/process/' + process_id + '/' + path, { responseType: 'text' });
  }

  getProcessLogs(id) {
    return this.http.get('/api/process/' + id + '/logs/');
  }

  // variables

  getVariables(): Observable<Variables> {
    return this.http.get<Variables>('/api/variables/global/');
  }

  setVariables(data: Variables): Observable<Object> {
    return this.http.post('/api/variables/global/', data);
  }

  // stats

  getStatsDashboard() {
    return this.http.get('/api/stats/dashboard/');
  }

  // package

  getPackages() {
    return this.http.get('/api/package/');
  }

  getPackage(id: number) {
    return this.http.get('/api/package/' + id + '/');
  }

  removePackage(id) {
    return this.http.delete('/api/package/' + id + '/');
  }

  startWorkflow(package_id) {
    this.http.post('/api/package/' + package_id + '/execute/', {}).subscribe(() => {
    });
  }

  finishPackage(package_id) {
    this.http.post('/api/package/' + package_id + '/finish/', {}).subscribe(() => {

    });
  }

  abortPackage(packageId) {
    return this.http.post('/api/package/' + packageId + '/abort/', {});
  }

  // files

  getFiles(path, specific= '') {
    return this.http.get(path + '?path=' + specific);
  }

  renameFile(path, body) {
    return this.http.put(path, body);
  }

  deleteFile(path, specific) {
    return this.http.delete(path + '?path=' + specific);
  }

  uploadFile(path, formData) {
    const req = new HttpRequest('POST', path, formData, {
    });

    return this.http.request(req);
  }

  createFolder(path, specific) {
    return this.http.put(path, {path: specific});
  }

  // docker
  getDockerImages(): Observable<[DockerImage]> {
    return this.http.get<[DockerImage]>('/api/image/');
  }

  saveDockerImage(image_id, data) {
    return this.http.post('/api/image/' + image_id + '/', data);
  }

  importDockerImage(formData): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', '/api/image/import/', formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }

  deleteDockerImage(image_id) {
    return this.http.delete('/api/image/' + image_id + '/');
  }
}
