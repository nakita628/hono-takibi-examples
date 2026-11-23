import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeletepermissionPermissionArnRoute,
  deleteDeletepermissionversionPermissionArnPermissionVersionRoute,
  deleteDeleteresourceshareResourceShareArnRoute,
  postAcceptresourceshareinvitationRoute,
  postAssociateresourcesharepermissionRoute,
  postAssociateresourceshareRoute,
  postCreatepermissionRoute,
  postCreatepermissionversionRoute,
  postCreateresourceshareRoute,
  postDisassociateresourcesharepermissionRoute,
  postDisassociateresourceshareRoute,
  postEnablesharingwithawsorganizationRoute,
  postGetpermissionRoute,
  postGetresourcepoliciesRoute,
  postGetresourceshareassociationsRoute,
  postGetresourceshareinvitationsRoute,
  postGetresourcesharesRoute,
  postListpendinginvitationresourcesRoute,
  postListpermissionassociationsRoute,
  postListpermissionsRoute,
  postListpermissionversionsRoute,
  postListprincipalsRoute,
  postListreplacepermissionassociationsworkRoute,
  postListresourcesharepermissionsRoute,
  postListresourcesRoute,
  postListresourcetypesRoute,
  postPromotepermissioncreatedfrompolicyRoute,
  postPromoteresourcesharecreatedfrompolicyResourceShareArnRoute,
  postRejectresourceshareinvitationRoute,
  postReplacepermissionassociationsRoute,
  postSetdefaultpermissionversionRoute,
  postTagresourceRoute,
  postUntagresourceRoute,
  postUpdateresourceshareRoute,
} from './routes'
import {
  deleteDeletepermissionPermissionArnRouteHandler,
  deleteDeletepermissionversionPermissionArnPermissionVersionRouteHandler,
  deleteDeleteresourceshareResourceShareArnRouteHandler,
  postAcceptresourceshareinvitationRouteHandler,
  postAssociateresourcesharepermissionRouteHandler,
  postAssociateresourceshareRouteHandler,
  postCreatepermissionRouteHandler,
  postCreatepermissionversionRouteHandler,
  postCreateresourceshareRouteHandler,
  postDisassociateresourcesharepermissionRouteHandler,
  postDisassociateresourceshareRouteHandler,
  postEnablesharingwithawsorganizationRouteHandler,
  postGetpermissionRouteHandler,
  postGetresourcepoliciesRouteHandler,
  postGetresourceshareassociationsRouteHandler,
  postGetresourceshareinvitationsRouteHandler,
  postGetresourcesharesRouteHandler,
  postListpendinginvitationresourcesRouteHandler,
  postListpermissionassociationsRouteHandler,
  postListpermissionsRouteHandler,
  postListpermissionversionsRouteHandler,
  postListprincipalsRouteHandler,
  postListreplacepermissionassociationsworkRouteHandler,
  postListresourcesharepermissionsRouteHandler,
  postListresourcesRouteHandler,
  postListresourcetypesRouteHandler,
  postPromotepermissioncreatedfrompolicyRouteHandler,
  postPromoteresourcesharecreatedfrompolicyResourceShareArnRouteHandler,
  postRejectresourceshareinvitationRouteHandler,
  postReplacepermissionassociationsRouteHandler,
  postSetdefaultpermissionversionRouteHandler,
  postTagresourceRouteHandler,
  postUntagresourceRouteHandler,
  postUpdateresourceshareRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAcceptresourceshareinvitationRoute, postAcceptresourceshareinvitationRouteHandler)
  .openapi(postAssociateresourceshareRoute, postAssociateresourceshareRouteHandler)
  .openapi(
    postAssociateresourcesharepermissionRoute,
    postAssociateresourcesharepermissionRouteHandler,
  )
  .openapi(postCreatepermissionRoute, postCreatepermissionRouteHandler)
  .openapi(postCreatepermissionversionRoute, postCreatepermissionversionRouteHandler)
  .openapi(postCreateresourceshareRoute, postCreateresourceshareRouteHandler)
  .openapi(
    deleteDeletepermissionPermissionArnRoute,
    deleteDeletepermissionPermissionArnRouteHandler,
  )
  .openapi(
    deleteDeletepermissionversionPermissionArnPermissionVersionRoute,
    deleteDeletepermissionversionPermissionArnPermissionVersionRouteHandler,
  )
  .openapi(
    deleteDeleteresourceshareResourceShareArnRoute,
    deleteDeleteresourceshareResourceShareArnRouteHandler,
  )
  .openapi(postDisassociateresourceshareRoute, postDisassociateresourceshareRouteHandler)
  .openapi(
    postDisassociateresourcesharepermissionRoute,
    postDisassociateresourcesharepermissionRouteHandler,
  )
  .openapi(
    postEnablesharingwithawsorganizationRoute,
    postEnablesharingwithawsorganizationRouteHandler,
  )
  .openapi(postGetpermissionRoute, postGetpermissionRouteHandler)
  .openapi(postGetresourcepoliciesRoute, postGetresourcepoliciesRouteHandler)
  .openapi(postGetresourceshareassociationsRoute, postGetresourceshareassociationsRouteHandler)
  .openapi(postGetresourceshareinvitationsRoute, postGetresourceshareinvitationsRouteHandler)
  .openapi(postGetresourcesharesRoute, postGetresourcesharesRouteHandler)
  .openapi(postListpendinginvitationresourcesRoute, postListpendinginvitationresourcesRouteHandler)
  .openapi(postListpermissionassociationsRoute, postListpermissionassociationsRouteHandler)
  .openapi(postListpermissionversionsRoute, postListpermissionversionsRouteHandler)
  .openapi(postListpermissionsRoute, postListpermissionsRouteHandler)
  .openapi(postListprincipalsRoute, postListprincipalsRouteHandler)
  .openapi(
    postListreplacepermissionassociationsworkRoute,
    postListreplacepermissionassociationsworkRouteHandler,
  )
  .openapi(postListresourcesharepermissionsRoute, postListresourcesharepermissionsRouteHandler)
  .openapi(postListresourcetypesRoute, postListresourcetypesRouteHandler)
  .openapi(postListresourcesRoute, postListresourcesRouteHandler)
  .openapi(
    postPromotepermissioncreatedfrompolicyRoute,
    postPromotepermissioncreatedfrompolicyRouteHandler,
  )
  .openapi(
    postPromoteresourcesharecreatedfrompolicyResourceShareArnRoute,
    postPromoteresourcesharecreatedfrompolicyResourceShareArnRouteHandler,
  )
  .openapi(postRejectresourceshareinvitationRoute, postRejectresourceshareinvitationRouteHandler)
  .openapi(postReplacepermissionassociationsRoute, postReplacepermissionassociationsRouteHandler)
  .openapi(postSetdefaultpermissionversionRoute, postSetdefaultpermissionversionRouteHandler)
  .openapi(postTagresourceRoute, postTagresourceRouteHandler)
  .openapi(postUntagresourceRoute, postUntagresourceRouteHandler)
  .openapi(postUpdateresourceshareRoute, postUpdateresourceshareRouteHandler)

export default app
