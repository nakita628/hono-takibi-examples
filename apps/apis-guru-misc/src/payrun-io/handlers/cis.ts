import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEmployerEmployerIdCisLineTypeCisLineTypeIdRoute,
  deleteEmployerEmployerIdCisTransactionCisTransactionIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
  deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute,
  getEmployerEmployerIdCisLineTypeCisLineTypeIdRoute,
  getEmployerEmployerIdCisLineTypesRoute,
  getEmployerEmployerIdCisTransactionCisTransactionIdRoute,
  getEmployerEmployerIdCisTransactionsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute,
  getEmployerEmployerIdSubContractorSubContractorIdCisLinesRoute,
  patchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
  postEmployerEmployerIdCisLineTypesRoute,
  postEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute,
  putEmployerEmployerIdCisLineTypeCisLineTypeIdRoute,
  putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cisHandler = app
  .openapi(deleteEmployerEmployerIdCisLineTypeCisLineTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypeCisLineTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEmployerEmployerIdCisLineTypeCisLineTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisLineTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdCisLineTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdCisTransactionCisTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisTransactionCisTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdCisTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putEmployerEmployerIdSubContractorSubContractorIdCisInstructionCisInstructionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEmployerEmployerIdSubContractorSubContractorIdCisInstructionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLineCisLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmployerEmployerIdSubContractorSubContractorIdCisLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
