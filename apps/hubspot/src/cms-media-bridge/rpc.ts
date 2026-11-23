import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMediaBridge202609EventsAttentionSpan(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09']['events']['attention-span']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'].events['attention-span'].$post(args, options),
  )
}

export async function postMediaBridge202609EventsMediaPlayed(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09']['events']['media-played']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'].events['media-played'].$post(args, options),
  )
}

export async function postMediaBridge202609EventsMediaPlayedPercent(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09']['events']['media-played-percent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'].events['media-played-percent'].$post(args, options),
  )
}

export async function getMediaBridge202609AppIdPropertiesObjectType(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$get(args, options),
  )
}

export async function postMediaBridge202609AppIdPropertiesObjectType(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].$post(args, options),
  )
}

export async function postMediaBridge202609AppIdPropertiesObjectTypeBatchArchive(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['archive']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.archive.$post(
      args,
      options,
    ),
  )
}

export async function postMediaBridge202609AppIdPropertiesObjectTypeBatchCreate(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.create.$post(
      args,
      options,
    ),
  )
}

export async function postMediaBridge202609AppIdPropertiesObjectTypeBatchRead(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['batch']['read']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].batch.read.$post(
      args,
      options,
    ),
  )
}

export async function getMediaBridge202609AppIdPropertiesObjectTypeGroups(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$get(
      args,
      options,
    ),
  )
}

export async function postMediaBridge202609AppIdPropertiesObjectTypeGroups(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups.$post(
      args,
      options,
    ),
  )
}

export async function getMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[':groupName'].$get(
      args,
      options,
    ),
  )
}

export async function deleteMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
      ':groupName'
    ].$delete(args, options),
  )
}

export async function patchMediaBridge202609AppIdPropertiesObjectTypeGroupsGroupName(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType']['groups'][':groupName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'].groups[
      ':groupName'
    ].$patch(args, options),
  )
}

export async function getMediaBridge202609AppIdPropertiesObjectTypePropertyName(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'][':propertyName'].$get(
      args,
      options,
    ),
  )
}

export async function deleteMediaBridge202609AppIdPropertiesObjectTypePropertyName(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'][':propertyName'].$delete(
      args,
      options,
    ),
  )
}

export async function patchMediaBridge202609AppIdPropertiesObjectTypePropertyName(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['properties'][':objectType'][':propertyName']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].properties[':objectType'][':propertyName'].$patch(
      args,
      options,
    ),
  )
}

export async function getMediaBridge202609AppIdSchemas(
  args: InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].schemas.$get(args, options),
  )
}

export async function getMediaBridge202609AppIdSchemasObjectType(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$get(args, options),
  )
}

export async function patchMediaBridge202609AppIdSchemasObjectType(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].$patch(args, options),
  )
}

export async function postMediaBridge202609AppIdSchemasObjectTypeAssociations(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].associations.$post(
      args,
      options,
    ),
  )
}

export async function deleteMediaBridge202609AppIdSchemasObjectTypeAssociationsAssociationId(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['schemas'][':objectType']['associations'][':associationId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].schemas[':objectType'].associations[
      ':associationId'
    ].$delete(args, options),
  )
}

export async function putMediaBridge202609AppIdSettings(
  args: InferRequestType<(typeof client)['media-bridge']['2026-09'][':appId']['settings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings.$put(args, options),
  )
}

export async function getMediaBridge202609AppIdSettingsEventVisibility(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$get(args, options),
  )
}

export async function patchMediaBridge202609AppIdSettingsEventVisibility(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['event-visibility']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['event-visibility'].$patch(args, options),
  )
}

export async function postMediaBridge202609AppIdSettingsObjectDefinitions(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['object-definitions'].$post(args, options),
  )
}

export async function getMediaBridge202609AppIdSettingsObjectDefinitionsMediaType(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['object-definitions'][':mediaType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['object-definitions'][':mediaType'].$get(
      args,
      options,
    ),
  )
}

export async function getMediaBridge202609AppIdSettingsOembedDomains(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$get(args, options),
  )
}

export async function postMediaBridge202609AppIdSettingsOembedDomains(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$post(args, options),
  )
}

export async function deleteMediaBridge202609AppIdSettingsOembedDomains(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'].$delete(args, options),
  )
}

export async function getMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][':oEmbedDomainId'].$get(
      args,
      options,
    ),
  )
}

export async function patchMediaBridge202609AppIdSettingsOembedDomainsOEmbedDomainId(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['oembed-domains'][':oEmbedDomainId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['oembed-domains'][
      ':oEmbedDomainId'
    ].$patch(args, options),
  )
}

export async function postMediaBridge202609AppIdSettingsRegister(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['register']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings.register.$post(args, options),
  )
}

export async function postMediaBridge202609AppIdSettingsVideoAssociationDefinition(
  args: InferRequestType<
    (typeof client)['media-bridge']['2026-09'][':appId']['settings']['video-association-definition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['media-bridge']['2026-09'][':appId'].settings['video-association-definition'].$post(
      args,
      options,
    ),
  )
}
