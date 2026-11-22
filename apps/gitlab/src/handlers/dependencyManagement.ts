import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4DependencyListExportsExportIdDownloadRoute,
  getApiV4DependencyListExportsExportIdRoute,
  getApiV4OccurrencesVulnerabilitiesRoute,
  getApiV4ProjectsIdDependenciesRoute,
  postApiV4GroupsIdDependencyListExportsRoute,
  postApiV4PipelinesIdDependencyListExportsRoute,
  postApiV4ProjectsIdDependencyListExportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dependencyManagementHandler = app
  .openapi(postApiV4ProjectsIdDependencyListExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdDependencyListExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4PipelinesIdDependencyListExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4DependencyListExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4DependencyListExportsExportIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4OccurrencesVulnerabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
