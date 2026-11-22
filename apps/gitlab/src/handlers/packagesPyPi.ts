import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4GroupsIdDashPackagesPypiFilesSha256FileIdentifierRoute,
  getApiV4GroupsIdDashPackagesPypiSimplePackageNameRoute,
  getApiV4GroupsIdDashPackagesPypiSimpleRoute,
  getApiV4ProjectsIdPackagesPypiFilesSha256FileIdentifierRoute,
  getApiV4ProjectsIdPackagesPypiSimplePackageNameRoute,
  getApiV4ProjectsIdPackagesPypiSimpleRoute,
  postApiV4ProjectsIdPackagesPypiAuthorizeRoute,
  postApiV4ProjectsIdPackagesPypiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesPyPiHandler = app
  .openapi(getApiV4GroupsIdDashPackagesPypiFilesSha256FileIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesPypiSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDashPackagesPypiSimplePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesPypiFilesSha256FileIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesPypiSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesPypiSimplePackageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesPypiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesPypiAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
