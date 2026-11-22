import { OpenAPIHono } from '@hono/zod-openapi'
import {
  acceptresourceshareinvitationHandler,
  associateresourceshareHandler,
  associateresourcesharepermissionHandler,
  createpermissionHandler,
  createpermissionversionHandler,
  createresourceshareHandler,
  deletepermissionPermissionArnHandler,
  deletepermissionversionPermissionArnPermissionVersionHandler,
  deleteresourceshareResourceShareArnHandler,
  disassociateresourceshareHandler,
  disassociateresourcesharepermissionHandler,
  enablesharingwithawsorganizationHandler,
  getpermissionHandler,
  getresourcepoliciesHandler,
  getresourceshareassociationsHandler,
  getresourceshareinvitationsHandler,
  getresourcesharesHandler,
  listpendinginvitationresourcesHandler,
  listpermissionassociationsHandler,
  listpermissionsHandler,
  listpermissionversionsHandler,
  listprincipalsHandler,
  listreplacepermissionassociationsworkHandler,
  listresourcesHandler,
  listresourcesharepermissionsHandler,
  listresourcetypesHandler,
  promotepermissioncreatedfrompolicyHandler,
  promoteresourcesharecreatedfrompolicyResourceShareArnHandler,
  rejectresourceshareinvitationHandler,
  replacepermissionassociationsHandler,
  setdefaultpermissionversionHandler,
  tagresourceHandler,
  untagresourceHandler,
  updateresourceshareHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', acceptresourceshareinvitationHandler)
  .route('/', associateresourceshareHandler)
  .route('/', associateresourcesharepermissionHandler)
  .route('/', createpermissionHandler)
  .route('/', createpermissionversionHandler)
  .route('/', createresourceshareHandler)
  .route('/', deletepermissionPermissionArnHandler)
  .route('/', deletepermissionversionPermissionArnPermissionVersionHandler)
  .route('/', deleteresourceshareResourceShareArnHandler)
  .route('/', disassociateresourceshareHandler)
  .route('/', disassociateresourcesharepermissionHandler)
  .route('/', enablesharingwithawsorganizationHandler)
  .route('/', getpermissionHandler)
  .route('/', getresourcepoliciesHandler)
  .route('/', getresourceshareassociationsHandler)
  .route('/', getresourceshareinvitationsHandler)
  .route('/', getresourcesharesHandler)
  .route('/', listpendinginvitationresourcesHandler)
  .route('/', listpermissionassociationsHandler)
  .route('/', listpermissionversionsHandler)
  .route('/', listpermissionsHandler)
  .route('/', listprincipalsHandler)
  .route('/', listreplacepermissionassociationsworkHandler)
  .route('/', listresourcesharepermissionsHandler)
  .route('/', listresourcetypesHandler)
  .route('/', listresourcesHandler)
  .route('/', promotepermissioncreatedfrompolicyHandler)
  .route('/', promoteresourcesharecreatedfrompolicyResourceShareArnHandler)
  .route('/', rejectresourceshareinvitationHandler)
  .route('/', replacepermissionassociationsHandler)
  .route('/', setdefaultpermissionversionHandler)
  .route('/', tagresourceHandler)
  .route('/', untagresourceHandler)
  .route('/', updateresourceshareHandler)

export default app
