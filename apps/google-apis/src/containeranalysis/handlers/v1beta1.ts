import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameNotesRoute,
  getV1beta1NameOccurrencesRoute,
  getV1beta1NameRoute,
  getV1beta1ParentNotesRoute,
  getV1beta1ParentOccurrencesRoute,
  getV1beta1ParentOccurrencesVulnerabilitySummaryRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentNotesBatchCreateRoute,
  postV1beta1ParentNotesRoute,
  postV1beta1ParentOccurrencesBatchCreateRoute,
  postV1beta1ParentOccurrencesRoute,
  postV1beta1ResourceGetIamPolicyRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentNotesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentOccurrencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentOccurrencesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentOccurrencesVulnerabilitySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
