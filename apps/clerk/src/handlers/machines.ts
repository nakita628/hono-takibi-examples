import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMachinesMachineIdRoute,
  deleteMachinesMachineIdScopesOtherMachineIdRoute,
  getMachinesMachineIdRoute,
  getMachinesMachineIdSecretKeyRoute,
  getMachinesRoute,
  patchMachinesMachineIdRoute,
  postMachinesMachineIdScopesRoute,
  postMachinesMachineIdSecretKeyRotateRoute,
  postMachinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const machinesHandler = app
  .openapi(getMachinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMachinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMachinesMachineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMachinesMachineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMachinesMachineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMachinesMachineIdSecretKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMachinesMachineIdSecretKeyRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMachinesMachineIdScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMachinesMachineIdScopesOtherMachineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
