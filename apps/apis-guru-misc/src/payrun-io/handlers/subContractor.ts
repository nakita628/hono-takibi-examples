import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdRoute,
  getEmployerEmployerIdSubContractorsEffectiveDateRoute,
  getEmployerEmployerIdSubContractorsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute,
  getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute,
  getEmployerEmployerIdSubContractorSubContractorIdRevisionsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdRoute,
  patchEmployerEmployerIdSubContractorSubContractorIdRoute,
  postEmployerEmployerIdSubContractorsRoute,
  putEmployerEmployerIdSubContractorSubContractorIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subContractorHandler = app
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEmployerEmployerIdSubContractorSubContractorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdSubContractorSubContractorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdRevisionRevisionNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdRevisionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdSubContractorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorsEffectiveDateRoute, (c) => {
    throw new Error('Not implemented')
  })
