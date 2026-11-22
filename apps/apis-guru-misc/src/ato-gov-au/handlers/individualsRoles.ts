import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndividualsPartyIdRolesRoleIdRoute,
  getIndividualsPartyIdRolesRoleIdRoute,
  getIndividualsPartyIdRolesRoute,
  postIndividualsPartyIdRolesRoute,
  putIndividualsPartyIdRolesRoleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const individualsRolesHandler = app
  .openapi(getIndividualsPartyIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndividualsPartyIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndividualsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndividualsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndividualsPartyIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
