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
} from './routes'
import {
  deleteV1ResourceNameDeleteContactPhotoRouteHandler,
  deleteV1ResourceNameDeleteContactRouteHandler,
  deleteV1ResourceNameRouteHandler,
  getV1ContactGroupsBatchGetRouteHandler,
  getV1ContactGroupsRouteHandler,
  getV1OtherContactsRouteHandler,
  getV1OtherContactsSearchRouteHandler,
  getV1PeopleBatchGetRouteHandler,
  getV1PeopleListDirectoryPeopleRouteHandler,
  getV1PeopleSearchContactsRouteHandler,
  getV1PeopleSearchDirectoryPeopleRouteHandler,
  getV1ResourceNameConnectionsRouteHandler,
  getV1ResourceNameRouteHandler,
  patchV1ResourceNameUpdateContactPhotoRouteHandler,
  patchV1ResourceNameUpdateContactRouteHandler,
  postV1ContactGroupsRouteHandler,
  postV1PeopleBatchCreateContactsRouteHandler,
  postV1PeopleBatchDeleteContactsRouteHandler,
  postV1PeopleBatchUpdateContactsRouteHandler,
  postV1PeopleCreateContactRouteHandler,
  postV1ResourceNameCopyOtherContactToMyContactsGroupRouteHandler,
  postV1ResourceNameMembersModifyRouteHandler,
  putV1ResourceNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1ContactGroupsRoute, getV1ContactGroupsRouteHandler)
  .openapi(postV1ContactGroupsRoute, postV1ContactGroupsRouteHandler)
  .openapi(getV1ContactGroupsBatchGetRoute, getV1ContactGroupsBatchGetRouteHandler)
  .openapi(getV1OtherContactsRoute, getV1OtherContactsRouteHandler)
  .openapi(getV1OtherContactsSearchRoute, getV1OtherContactsSearchRouteHandler)
  .openapi(postV1PeopleBatchCreateContactsRoute, postV1PeopleBatchCreateContactsRouteHandler)
  .openapi(postV1PeopleBatchDeleteContactsRoute, postV1PeopleBatchDeleteContactsRouteHandler)
  .openapi(getV1PeopleBatchGetRoute, getV1PeopleBatchGetRouteHandler)
  .openapi(postV1PeopleBatchUpdateContactsRoute, postV1PeopleBatchUpdateContactsRouteHandler)
  .openapi(postV1PeopleCreateContactRoute, postV1PeopleCreateContactRouteHandler)
  .openapi(getV1PeopleListDirectoryPeopleRoute, getV1PeopleListDirectoryPeopleRouteHandler)
  .openapi(getV1PeopleSearchContactsRoute, getV1PeopleSearchContactsRouteHandler)
  .openapi(getV1PeopleSearchDirectoryPeopleRoute, getV1PeopleSearchDirectoryPeopleRouteHandler)
  .openapi(deleteV1ResourceNameRoute, deleteV1ResourceNameRouteHandler)
  .openapi(getV1ResourceNameRoute, getV1ResourceNameRouteHandler)
  .openapi(putV1ResourceNameRoute, putV1ResourceNameRouteHandler)
  .openapi(getV1ResourceNameConnectionsRoute, getV1ResourceNameConnectionsRouteHandler)
  .openapi(postV1ResourceNameMembersModifyRoute, postV1ResourceNameMembersModifyRouteHandler)
  .openapi(
    postV1ResourceNameCopyOtherContactToMyContactsGroupRoute,
    postV1ResourceNameCopyOtherContactToMyContactsGroupRouteHandler,
  )
  .openapi(deleteV1ResourceNameDeleteContactRoute, deleteV1ResourceNameDeleteContactRouteHandler)
  .openapi(
    deleteV1ResourceNameDeleteContactPhotoRoute,
    deleteV1ResourceNameDeleteContactPhotoRouteHandler,
  )
  .openapi(patchV1ResourceNameUpdateContactRoute, patchV1ResourceNameUpdateContactRouteHandler)
  .openapi(
    patchV1ResourceNameUpdateContactPhotoRoute,
    patchV1ResourceNameUpdateContactPhotoRouteHandler,
  )

export default app
