// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {DEFAULT_ACTIONBAR} from '@common/components/actionbars/routing';

import {CONFIG_ROUTE} from '../routing';

import {ConfigMapDetailComponent} from './detail/component';
import {ConfigMapListComponent} from './list/component';

const CONFIGMAP_LIST_ROUTE: Route = {
  path: '',
  component: ConfigMapListComponent,
  data: {
    breadcrumb: 'Config Maps',
    parent: CONFIG_ROUTE,
  },
};

const CONFIGMAP_DETAIL_ROUTE: Route = {
  path: ':resourceNamespace/:resourceName',
  component: ConfigMapDetailComponent,
  data: {
    breadcrumb: '{{ resourceName }}',
    parent: CONFIGMAP_LIST_ROUTE,
  },
};

@NgModule({
  imports: [RouterModule.forChild([CONFIGMAP_LIST_ROUTE, CONFIGMAP_DETAIL_ROUTE, DEFAULT_ACTIONBAR])],
  exports: [RouterModule],
})
export class ConfigMapRoutingModule {}
