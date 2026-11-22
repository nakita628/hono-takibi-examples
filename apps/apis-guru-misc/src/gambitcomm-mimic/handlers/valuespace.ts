import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMimicAgentAgentNumValueRemoveObjectInstanceRoute,
  getMimicAgentAgentNumValueEvalObjectInstanceRoute,
  getMimicAgentAgentNumValueGetObjectInstanceVariableRoute,
  getMimicAgentAgentNumValueInfoObjectRoute,
  getMimicAgentAgentNumValueInstancesObjectRoute,
  getMimicAgentAgentNumValueListOIDRoute,
  getMimicAgentAgentNumValueMevalObjInsArrayRoute,
  getMimicAgentAgentNumValueMgetObjInsVarArrayRoute,
  getMimicAgentAgentNumValueMibObjectRoute,
  getMimicAgentAgentNumValueNameOIDRoute,
  getMimicAgentAgentNumValueOidObjectRoute,
  getMimicAgentAgentNumValueSplitOIDRoute,
  getMimicAgentAgentNumValueStateGetObjectRoute,
  getMimicAgentAgentNumValueVariablesObjectInstanceRoute,
  postMimicAgentAgentNumValueAddObjectInstanceRoute,
  putMimicAgentAgentNumValueMsetRoute,
  putMimicAgentAgentNumValueMunsetRoute,
  putMimicAgentAgentNumValueSetObjectInstanceVariableRoute,
  putMimicAgentAgentNumValueStateSetObjectStateRoute,
  putMimicAgentAgentNumValueUnsetObjectInstanceVariableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const valuespaceHandler = app
  .openapi(postMimicAgentAgentNumValueAddObjectInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueEvalObjectInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueGetObjectInstanceVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueInfoObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueInstancesObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueListOIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueMevalObjInsArrayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueMgetObjInsVarArrayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueMibObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueMsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueMunsetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueNameOIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueOidObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMimicAgentAgentNumValueRemoveObjectInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueSetObjectInstanceVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueSplitOIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueStateGetObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueStateSetObjectStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMimicAgentAgentNumValueUnsetObjectInstanceVariableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMimicAgentAgentNumValueVariablesObjectInstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
