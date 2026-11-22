import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute,
  deletePrintServicesPrintServiceIdRoute,
  getPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute,
  getPrintServicesPrintServiceIdEndpointsRoute,
  getPrintServicesPrintServiceIdRoute,
  getPrintServicesRoute,
  patchPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute,
  patchPrintServicesPrintServiceIdRoute,
  postPrintServicesPrintServiceIdEndpointsRoute,
  postPrintServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const printPrintServiceHandler = app
  .openapi(getPrintServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintServicesPrintServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintServicesPrintServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintServicesPrintServiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintServicesPrintServiceIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPrintServicesPrintServiceIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
