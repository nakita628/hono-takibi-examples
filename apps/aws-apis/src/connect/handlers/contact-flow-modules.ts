import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContactFlowModulesInstanceIdContactFlowModuleIdRoute,
  getContactFlowModulesInstanceIdContactFlowModuleIdRoute,
  postContactFlowModulesInstanceIdContactFlowModuleIdContentRoute,
  postContactFlowModulesInstanceIdContactFlowModuleIdMetadataRoute,
  putContactFlowModulesInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactFlowModulesHandler = app
  .openapi(putContactFlowModulesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContactFlowModulesInstanceIdContactFlowModuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactFlowModulesInstanceIdContactFlowModuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactFlowModulesInstanceIdContactFlowModuleIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactFlowModulesInstanceIdContactFlowModuleIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
