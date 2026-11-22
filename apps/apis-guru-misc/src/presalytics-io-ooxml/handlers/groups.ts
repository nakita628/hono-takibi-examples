import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsChildObjectsIdRoute,
  getGroupsDetailsIdRoute,
  getGroupsIdRoute,
  getGroupsOpenOfficeXmlIdRoute,
  getGroupsSvgIdRoute,
  putGroupsOpenOfficeXmlIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsChildObjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsDetailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsOpenOfficeXmlIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsSvgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
