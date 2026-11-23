import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postProdInputDevicesInputDeviceIdAccept(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputDevices[':inputDeviceId'].accept.$post(args, options))
}

export async function postProdBatchDelete(
  args: InferRequestType<typeof client.prod.batch.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.batch.delete.$post(args, options))
}

export async function postProdBatchStart(
  args: InferRequestType<typeof client.prod.batch.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.batch.start.$post(args, options))
}

export async function postProdBatchStop(
  args: InferRequestType<typeof client.prod.batch.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.batch.stop.$post(args, options))
}

export async function getProdChannelsChannelIdSchedule(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].schedule.$get(args, options))
}

export async function putProdChannelsChannelIdSchedule(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].schedule.$put(args, options))
}

export async function deleteProdChannelsChannelIdSchedule(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['schedule']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].schedule.$delete(args, options))
}

export async function postProdInputDevicesInputDeviceIdCancel(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputDevices[':inputDeviceId'].cancel.$post(args, options))
}

export async function postProdClaimDevice(
  args: InferRequestType<typeof client.prod.claimDevice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.claimDevice.$post(args, options))
}

export async function getProdChannels(
  args: InferRequestType<typeof client.prod.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels.$get(args, options))
}

export async function postProdChannels(
  args: InferRequestType<typeof client.prod.channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels.$post(args, options))
}

export async function getProdInputs(
  args: InferRequestType<typeof client.prod.inputs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputs.$get(args, options))
}

export async function postProdInputs(
  args: InferRequestType<typeof client.prod.inputs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputs.$post(args, options))
}

export async function getProdInputSecurityGroups(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputSecurityGroups.$get(args, options))
}

export async function postProdInputSecurityGroups(
  args: InferRequestType<typeof client.prod.inputSecurityGroups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputSecurityGroups.$post(args, options))
}

export async function getProdMultiplexes(
  args: InferRequestType<typeof client.prod.multiplexes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes.$get(args, options))
}

export async function postProdMultiplexes(
  args: InferRequestType<typeof client.prod.multiplexes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes.$post(args, options))
}

export async function getProdMultiplexesMultiplexIdPrograms(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes[':multiplexId'].programs.$get(args, options))
}

export async function postProdMultiplexesMultiplexIdPrograms(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['programs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes[':multiplexId'].programs.$post(args, options))
}

export async function postProdInputsInputIdPartners(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['partners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputs[':inputId'].partners.$post(args, options))
}

export async function getProdTagsResourceArn(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.tags[':resource-arn'].$get(args, options))
}

export async function postProdTagsResourceArn(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.tags[':resource-arn'].$post(args, options))
}

export async function getProdChannelsChannelId(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].$get(args, options))
}

export async function putProdChannelsChannelId(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].$put(args, options))
}

export async function deleteProdChannelsChannelId(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].$delete(args, options))
}

export async function getProdInputsInputId(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputs[':inputId'].$get(args, options))
}

export async function putProdInputsInputId(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputs[':inputId'].$put(args, options))
}

export async function deleteProdInputsInputId(
  args: InferRequestType<(typeof client.prod.inputs)[':inputId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputs[':inputId'].$delete(args, options))
}

export async function getProdInputSecurityGroupsInputSecurityGroupId(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.inputSecurityGroups[':inputSecurityGroupId'].$get(args, options),
  )
}

export async function putProdInputSecurityGroupsInputSecurityGroupId(
  args: InferRequestType<(typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.inputSecurityGroups[':inputSecurityGroupId'].$put(args, options),
  )
}

export async function deleteProdInputSecurityGroupsInputSecurityGroupId(
  args: InferRequestType<
    (typeof client.prod.inputSecurityGroups)[':inputSecurityGroupId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.inputSecurityGroups[':inputSecurityGroupId'].$delete(args, options),
  )
}

export async function getProdMultiplexesMultiplexId(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes[':multiplexId'].$get(args, options))
}

export async function putProdMultiplexesMultiplexId(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes[':multiplexId'].$put(args, options))
}

export async function deleteProdMultiplexesMultiplexId(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes[':multiplexId'].$delete(args, options))
}

export async function getProdMultiplexesMultiplexIdProgramsProgramName(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.multiplexes[':multiplexId'].programs[':programName'].$get(args, options),
  )
}

export async function putProdMultiplexesMultiplexIdProgramsProgramName(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.multiplexes[':multiplexId'].programs[':programName'].$put(args, options),
  )
}

export async function deleteProdMultiplexesMultiplexIdProgramsProgramName(
  args: InferRequestType<
    (typeof client.prod.multiplexes)[':multiplexId']['programs'][':programName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.multiplexes[':multiplexId'].programs[':programName'].$delete(args, options),
  )
}

export async function getProdReservationsReservationId(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.reservations[':reservationId'].$get(args, options))
}

export async function putProdReservationsReservationId(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.reservations[':reservationId'].$put(args, options))
}

export async function deleteProdReservationsReservationId(
  args: InferRequestType<(typeof client.prod.reservations)[':reservationId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.reservations[':reservationId'].$delete(args, options))
}

export async function deleteProdTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.prod.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.tags[':resource-arn#tagKeys'].$delete(args, options))
}

export async function getProdInputDevicesInputDeviceId(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputDevices[':inputDeviceId'].$get(args, options))
}

export async function putProdInputDevicesInputDeviceId(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputDevices[':inputDeviceId'].$put(args, options))
}

export async function getProdInputDevicesInputDeviceIdThumbnailDataAccept(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['thumbnailData#accept']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.inputDevices[':inputDeviceId']['thumbnailData#accept'].$get(args, options),
  )
}

export async function getProdOfferingsOfferingId(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.offerings[':offeringId'].$get(args, options))
}

export async function getProdInputDeviceTransfersTransferType(
  args: InferRequestType<(typeof client.prod)['inputDeviceTransfers#transferType']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod['inputDeviceTransfers#transferType'].$get(args, options))
}

export async function getProdInputDevices(
  args: InferRequestType<typeof client.prod.inputDevices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputDevices.$get(args, options))
}

export async function getProdOfferings(
  args: InferRequestType<typeof client.prod.offerings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.offerings.$get(args, options))
}

export async function getProdReservations(
  args: InferRequestType<typeof client.prod.reservations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.reservations.$get(args, options))
}

export async function postProdOfferingsOfferingIdPurchase(
  args: InferRequestType<(typeof client.prod.offerings)[':offeringId']['purchase']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.offerings[':offeringId'].purchase.$post(args, options))
}

export async function postProdInputDevicesInputDeviceIdReboot(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['reboot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputDevices[':inputDeviceId'].reboot.$post(args, options))
}

export async function postProdInputDevicesInputDeviceIdReject(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['reject']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.inputDevices[':inputDeviceId'].reject.$post(args, options))
}

export async function postProdChannelsChannelIdStart(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].start.$post(args, options))
}

export async function postProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindow(
  args: InferRequestType<
    (typeof client.prod.inputDevices)[':inputDeviceId']['startInputDeviceMaintenanceWindow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.inputDevices[':inputDeviceId'].startInputDeviceMaintenanceWindow.$post(
      args,
      options,
    ),
  )
}

export async function postProdMultiplexesMultiplexIdStart(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes[':multiplexId'].start.$post(args, options))
}

export async function postProdChannelsChannelIdStop(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].stop.$post(args, options))
}

export async function postProdMultiplexesMultiplexIdStop(
  args: InferRequestType<(typeof client.prod.multiplexes)[':multiplexId']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.multiplexes[':multiplexId'].stop.$post(args, options))
}

export async function postProdInputDevicesInputDeviceIdTransfer(
  args: InferRequestType<(typeof client.prod.inputDevices)[':inputDeviceId']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.prod.inputDevices[':inputDeviceId'].transfer.$post(args, options),
  )
}

export async function putProdChannelsChannelIdChannelClass(
  args: InferRequestType<(typeof client.prod.channels)[':channelId']['channelClass']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.prod.channels[':channelId'].channelClass.$put(args, options))
}
