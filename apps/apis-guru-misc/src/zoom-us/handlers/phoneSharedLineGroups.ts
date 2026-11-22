import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdMembersRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdRoute,
  deletePhoneSharedLineGroupsSharedLineGroupIdRoute,
  getPhoneSharedLineGroupsRoute,
  getPhoneSharedLineGroupsSharedLineGroupIdRoute,
  patchPhoneSharedLineGroupsSharedLineGroupIdRoute,
  postPhoneSharedLineGroupsRoute,
  postPhoneSharedLineGroupsSharedLineGroupIdMembersRoute,
  postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneSharedLineGroupsHandler = app
  .openapi(getPhoneSharedLineGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSharedLineGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSharedLineGroupsSharedLineGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneSharedLineGroupsSharedLineGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneSharedLineGroupsSharedLineGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSharedLineGroupsSharedLineGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSharedLineGroupsSharedLineGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSharedLineGroupsSharedLineGroupIdMembersMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneSharedLineGroupsSharedLineGroupIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
