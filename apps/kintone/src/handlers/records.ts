import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKGuestGuestSpaceIdV1RecordCommentJsonRoute,
  deleteKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
  deleteKGuestGuestSpaceIdV1RecordsJsonRoute,
  deleteKV1RecordCommentJsonRoute,
  deleteKV1RecordsCursorJsonRoute,
  deleteKV1RecordsJsonRoute,
  getKGuestGuestSpaceIdV1RecordAclJsonRoute,
  getKGuestGuestSpaceIdV1RecordCommentsJsonRoute,
  getKGuestGuestSpaceIdV1RecordJsonRoute,
  getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRoute,
  getKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
  getKGuestGuestSpaceIdV1RecordsJsonRoute,
  getKV1RecordAclJsonRoute,
  getKV1RecordCommentsJsonRoute,
  getKV1RecordJsonRoute,
  getKV1RecordsAclEvaluateJsonRoute,
  getKV1RecordsCursorJsonRoute,
  getKV1RecordsJsonRoute,
  postKGuestGuestSpaceIdV1RecordCommentJsonRoute,
  postKGuestGuestSpaceIdV1RecordJsonRoute,
  postKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
  postKGuestGuestSpaceIdV1RecordsJsonRoute,
  postKV1RecordAsyncTokenJsonRoute,
  postKV1RecordCommentJsonRoute,
  postKV1RecordJsonRoute,
  postKV1RecordsCursorJsonRoute,
  postKV1RecordsJsonRoute,
  putKGuestGuestSpaceIdV1RecordAclJsonRoute,
  putKGuestGuestSpaceIdV1RecordAssigneesJsonRoute,
  putKGuestGuestSpaceIdV1RecordJsonRoute,
  putKGuestGuestSpaceIdV1RecordsJsonRoute,
  putKGuestGuestSpaceIdV1RecordsStatusJsonRoute,
  putKGuestGuestSpaceIdV1RecordStatusJsonRoute,
  putKV1RecordAclJsonRoute,
  putKV1RecordAssigneesJsonRoute,
  putKV1RecordJsonRoute,
  putKV1RecordsJsonRoute,
  putKV1RecordsStatusJsonRoute,
  putKV1RecordStatusJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app
  .openapi(getKGuestGuestSpaceIdV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordAssigneesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1RecordCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1RecordCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordCommentsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordsStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordAssigneesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordAsyncTokenJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1RecordCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordCommentsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordsAclEvaluateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordsStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
