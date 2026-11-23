import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ResourceNameDeleteContactPhotoRoute,
  deleteV1ResourceNameDeleteContactRoute,
  deleteV1ResourceNameRoute,
  getV1ContactGroupsBatchGetRoute,
  getV1ContactGroupsRoute,
  getV1OtherContactsRoute,
  getV1OtherContactsSearchRoute,
  getV1PeopleBatchGetRoute,
  getV1PeopleListDirectoryPeopleRoute,
  getV1PeopleSearchContactsRoute,
  getV1PeopleSearchDirectoryPeopleRoute,
  getV1ResourceNameConnectionsRoute,
  getV1ResourceNameRoute,
  patchV1ResourceNameUpdateContactPhotoRoute,
  patchV1ResourceNameUpdateContactRoute,
  postV1ContactGroupsRoute,
  postV1PeopleBatchCreateContactsRoute,
  postV1PeopleBatchDeleteContactsRoute,
  postV1PeopleBatchUpdateContactsRoute,
  postV1PeopleCreateContactRoute,
  postV1ResourceNameCopyOtherContactToMyContactsGroupRoute,
  postV1ResourceNameMembersModifyRoute,
  putV1ResourceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1ContactGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ContactGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ContactGroupsBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OtherContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OtherContactsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PeopleBatchCreateContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PeopleBatchDeleteContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PeopleBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PeopleBatchUpdateContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PeopleCreateContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PeopleListDirectoryPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PeopleSearchContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PeopleSearchDirectoryPeopleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ResourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceNameConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceNameMembersModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceNameCopyOtherContactToMyContactsGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ResourceNameDeleteContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ResourceNameDeleteContactPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ResourceNameUpdateContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ResourceNameUpdateContactPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
