import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getIndexPhpAppsFilesApiV1ThumbnailXYFile(
  args: InferRequestType<
    (typeof client)['index.php']['apps']['files']['api']['v1']['thumbnail'][':x'][':y'][':file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['index.php'].apps.files.api.v1.thumbnail[':x'][':y'][':file'].$get(args, options),
  )
}

export async function getOcsV2PhpAppsFilesApiV1DirectEditing(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.directEditing.$get(args, options),
  )
}

export async function getOcsV2PhpAppsFilesApiV1DirectEditingTemplatesEditorIdCreatorId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['templates'][':editorId'][':creatorId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.directEditing.templates[':editorId'][':creatorId'].$get(
      args,
      options,
    ),
  )
}

export async function postOcsV2PhpAppsFilesApiV1DirectEditingOpen(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['open']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.directEditing.open.$post(args, options),
  )
}

export async function postOcsV2PhpAppsFilesApiV1DirectEditingCreate(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['directEditing']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.directEditing.create.$post(args, options),
  )
}

export async function getOcsV2PhpAppsFilesApiV1Templates(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.files.api.v1.templates.$get(args, options))
}

export async function getOcsV2PhpAppsFilesApiV1TemplatesFieldsFileId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['fields'][':fileId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.templates.fields[':fileId'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsFilesApiV1TemplatesCreate(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.templates.create.$post(args, options),
  )
}

export async function postOcsV2PhpAppsFilesApiV1TemplatesPath(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['templates']['path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.templates.path.$post(args, options),
  )
}

export async function postOcsV2PhpAppsFilesApiV1Transferownership(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.transferownership.$post(args, options),
  )
}

export async function postOcsV2PhpAppsFilesApiV1TransferownershipId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.transferownership[':id'].$post(args, options),
  )
}

export async function deleteOcsV2PhpAppsFilesApiV1TransferownershipId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['transferownership'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.transferownership[':id'].$delete(args, options),
  )
}

export async function postOcsV2PhpAppsFilesApiV1Openlocaleditor(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['openlocaleditor']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.openlocaleditor.$post(args, options),
  )
}

export async function postOcsV2PhpAppsFilesApiV1OpenlocaleditorToken(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['openlocaleditor'][':token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1.openlocaleditor[':token'].$post(args, options),
  )
}

export async function getOcsV2PhpAppsFilesApiV1FolderTree(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['folder-tree']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.files.api.v1['folder-tree'].$get(args, options),
  )
}

export async function postOcsV2PhpAppsFilesApiV1Convert(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['convert']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.files.api.v1.convert.$post(args, options))
}

export async function postOcsV2PhpAppsFilesApiV1Opened(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['files']['api']['v1']['opened']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ocs['v2.php'].apps.files.api.v1.opened.$post(args, options))
}
