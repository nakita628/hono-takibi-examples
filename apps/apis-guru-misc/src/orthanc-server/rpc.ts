import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getChanges(
  args: InferRequestType<typeof client.changes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changes.$get(args, options))
}

export async function deleteChanges(options?: ClientRequestOptions) {
  return await parseResponse(client.changes.$delete(undefined, options))
}

export async function getExports(
  args: InferRequestType<typeof client.exports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.$get(args, options))
}

export async function deleteExports(options?: ClientRequestOptions) {
  return await parseResponse(client.exports.$delete(undefined, options))
}

export async function getInstances(
  args: InferRequestType<typeof client.instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances.$get(args, options))
}

export async function postInstances(
  args: InferRequestType<typeof client.instances.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances.$post(args, options))
}

export async function getInstancesId(
  args: InferRequestType<(typeof client.instances)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].$get(args, options))
}

export async function deleteInstancesId(
  args: InferRequestType<(typeof client.instances)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].$delete(args, options))
}

export async function postInstancesIdAnonymize(
  args: InferRequestType<(typeof client.instances)[':id']['anonymize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].anonymize.$post(args, options))
}

export async function getInstancesIdAttachments(
  args: InferRequestType<(typeof client.instances)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].attachments.$get(args, options))
}

export async function getInstancesIdAttachmentsName(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].attachments[':name'].$get(args, options))
}

export async function putInstancesIdAttachmentsName(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].attachments[':name'].$put(args, options))
}

export async function deleteInstancesIdAttachmentsName(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].attachments[':name'].$delete(args, options))
}

export async function postInstancesIdAttachmentsNameCompress(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].attachments[':name'].compress.$post(args, options),
  )
}

export async function getInstancesIdAttachmentsNameCompressedData(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].attachments[':name']['compressed-data'].$get(args, options),
  )
}

export async function getInstancesIdAttachmentsNameCompressedMd5(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].attachments[':name']['compressed-md5'].$get(args, options),
  )
}

export async function getInstancesIdAttachmentsNameCompressedSize(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].attachments[':name']['compressed-size'].$get(args, options),
  )
}

export async function getInstancesIdAttachmentsNameData(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].attachments[':name'].data.$get(args, options))
}

export async function getInstancesIdAttachmentsNameInfo(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].attachments[':name'].info.$get(args, options))
}

export async function getInstancesIdAttachmentsNameIsCompressed(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].attachments[':name']['is-compressed'].$get(args, options),
  )
}

export async function getInstancesIdAttachmentsNameMd5(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].attachments[':name'].md5.$get(args, options))
}

export async function getInstancesIdAttachmentsNameSize(
  args: InferRequestType<(typeof client.instances)[':id']['attachments'][':name']['size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].attachments[':name'].size.$get(args, options))
}

export async function postInstancesIdAttachmentsNameUncompress(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['uncompress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].attachments[':name'].uncompress.$post(args, options),
  )
}

export async function postInstancesIdAttachmentsNameVerifyMd5(
  args: InferRequestType<
    (typeof client.instances)[':id']['attachments'][':name']['verify-md5']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].attachments[':name']['verify-md5'].$post(args, options),
  )
}

export async function getInstancesIdContent(
  args: InferRequestType<(typeof client.instances)[':id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].content.$get(args, options))
}

export async function postInstancesIdExport(
  args: InferRequestType<(typeof client.instances)[':id']['export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].export.$post(args, options))
}

export async function getInstancesIdFile(
  args: InferRequestType<(typeof client.instances)[':id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].file.$get(args, options))
}

export async function getInstancesIdFrames(
  args: InferRequestType<(typeof client.instances)[':id']['frames']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].frames.$get(args, options))
}

export async function getInstancesIdFramesFrame(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].frames[':frame'].$get(args, options))
}

export async function getInstancesIdFramesFrameImageInt16(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-int16']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].frames[':frame']['image-int16'].$get(args, options),
  )
}

export async function getInstancesIdFramesFrameImageUint16(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint16']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].frames[':frame']['image-uint16'].$get(args, options),
  )
}

export async function getInstancesIdFramesFrameImageUint8(
  args: InferRequestType<
    (typeof client.instances)[':id']['frames'][':frame']['image-uint8']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.instances[':id'].frames[':frame']['image-uint8'].$get(args, options),
  )
}

export async function getInstancesIdFramesFrameMatlab(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['matlab']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].frames[':frame'].matlab.$get(args, options))
}

export async function getInstancesIdFramesFrameNumpy(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['numpy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].frames[':frame'].numpy.$get(args, options))
}

export async function getInstancesIdFramesFramePreview(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].frames[':frame'].preview.$get(args, options))
}

export async function getInstancesIdFramesFrameRaw(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].frames[':frame'].raw.$get(args, options))
}

export async function getInstancesIdFramesFrameRawGz(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['raw.gz']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].frames[':frame']['raw.gz'].$get(args, options))
}

export async function getInstancesIdFramesFrameRendered(
  args: InferRequestType<(typeof client.instances)[':id']['frames'][':frame']['rendered']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].frames[':frame'].rendered.$get(args, options))
}

export async function getInstancesIdHeader(
  args: InferRequestType<(typeof client.instances)[':id']['header']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].header.$get(args, options))
}

export async function getInstancesIdImageInt16(
  args: InferRequestType<(typeof client.instances)[':id']['image-int16']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id']['image-int16'].$get(args, options))
}

export async function getInstancesIdImageUint16(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint16']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id']['image-uint16'].$get(args, options))
}

export async function getInstancesIdImageUint8(
  args: InferRequestType<(typeof client.instances)[':id']['image-uint8']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id']['image-uint8'].$get(args, options))
}

export async function getInstancesIdMatlab(
  args: InferRequestType<(typeof client.instances)[':id']['matlab']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].matlab.$get(args, options))
}

export async function getInstancesIdMetadata(
  args: InferRequestType<(typeof client.instances)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].metadata.$get(args, options))
}

export async function getInstancesIdMetadataName(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].metadata[':name'].$get(args, options))
}

export async function putInstancesIdMetadataName(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].metadata[':name'].$put(args, options))
}

export async function deleteInstancesIdMetadataName(
  args: InferRequestType<(typeof client.instances)[':id']['metadata'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].metadata[':name'].$delete(args, options))
}

export async function postInstancesIdModify(
  args: InferRequestType<(typeof client.instances)[':id']['modify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].modify.$post(args, options))
}

export async function getInstancesIdModule(
  args: InferRequestType<(typeof client.instances)[':id']['module']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].module.$get(args, options))
}

export async function getInstancesIdNumpy(
  args: InferRequestType<(typeof client.instances)[':id']['numpy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].numpy.$get(args, options))
}

export async function getInstancesIdPatient(
  args: InferRequestType<(typeof client.instances)[':id']['patient']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].patient.$get(args, options))
}

export async function getInstancesIdPdf(
  args: InferRequestType<(typeof client.instances)[':id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].pdf.$get(args, options))
}

export async function getInstancesIdPreview(
  args: InferRequestType<(typeof client.instances)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].preview.$get(args, options))
}

export async function postInstancesIdReconstruct(
  args: InferRequestType<(typeof client.instances)[':id']['reconstruct']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].reconstruct.$post(args, options))
}

export async function getInstancesIdRendered(
  args: InferRequestType<(typeof client.instances)[':id']['rendered']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].rendered.$get(args, options))
}

export async function getInstancesIdSeries(
  args: InferRequestType<(typeof client.instances)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].series.$get(args, options))
}

export async function getInstancesIdSimplifiedTags(
  args: InferRequestType<(typeof client.instances)[':id']['simplified-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id']['simplified-tags'].$get(args, options))
}

export async function getInstancesIdStatistics(
  args: InferRequestType<(typeof client.instances)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].statistics.$get(args, options))
}

export async function getInstancesIdStudy(
  args: InferRequestType<(typeof client.instances)[':id']['study']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].study.$get(args, options))
}

export async function getInstancesIdTags(
  args: InferRequestType<(typeof client.instances)[':id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.instances[':id'].tags.$get(args, options))
}

export async function getJobs(
  args: InferRequestType<typeof client.jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.$get(args, options))
}

export async function getJobsId(
  args: InferRequestType<(typeof client.jobs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].$get(args, options))
}

export async function postJobsIdCancel(
  args: InferRequestType<(typeof client.jobs)[':id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].cancel.$post(args, options))
}

export async function postJobsIdPause(
  args: InferRequestType<(typeof client.jobs)[':id']['pause']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].pause.$post(args, options))
}

export async function postJobsIdResubmit(
  args: InferRequestType<(typeof client.jobs)[':id']['resubmit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].resubmit.$post(args, options))
}

export async function postJobsIdResume(
  args: InferRequestType<(typeof client.jobs)[':id']['resume']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'].resume.$post(args, options))
}

export async function getJobsIdKey(
  args: InferRequestType<(typeof client.jobs)[':id'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs[':id'][':key'].$get(args, options))
}

export async function getModalities(
  args: InferRequestType<typeof client.modalities.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities.$get(args, options))
}

export async function getModalitiesId(
  args: InferRequestType<(typeof client.modalities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].$get(args, options))
}

export async function putModalitiesId(
  args: InferRequestType<(typeof client.modalities)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].$put(args, options))
}

export async function deleteModalitiesId(
  args: InferRequestType<(typeof client.modalities)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].$delete(args, options))
}

export async function getModalitiesIdConfiguration(
  args: InferRequestType<(typeof client.modalities)[':id']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].configuration.$get(args, options))
}

export async function postModalitiesIdEcho(
  args: InferRequestType<(typeof client.modalities)[':id']['echo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].echo.$post(args, options))
}

export async function postModalitiesIdFind(
  args: InferRequestType<(typeof client.modalities)[':id']['find']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].find.$post(args, options))
}

export async function postModalitiesIdFindInstance(
  args: InferRequestType<(typeof client.modalities)[':id']['find-instance']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id']['find-instance'].$post(args, options))
}

export async function postModalitiesIdFindPatient(
  args: InferRequestType<(typeof client.modalities)[':id']['find-patient']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id']['find-patient'].$post(args, options))
}

export async function postModalitiesIdFindSeries(
  args: InferRequestType<(typeof client.modalities)[':id']['find-series']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id']['find-series'].$post(args, options))
}

export async function postModalitiesIdFindStudy(
  args: InferRequestType<(typeof client.modalities)[':id']['find-study']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id']['find-study'].$post(args, options))
}

export async function postModalitiesIdFindWorklist(
  args: InferRequestType<(typeof client.modalities)[':id']['find-worklist']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id']['find-worklist'].$post(args, options))
}

export async function postModalitiesIdMove(
  args: InferRequestType<(typeof client.modalities)[':id']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].move.$post(args, options))
}

export async function postModalitiesIdQuery(
  args: InferRequestType<(typeof client.modalities)[':id']['query']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].query.$post(args, options))
}

export async function postModalitiesIdStorageCommitment(
  args: InferRequestType<(typeof client.modalities)[':id']['storage-commitment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id']['storage-commitment'].$post(args, options))
}

export async function postModalitiesIdStore(
  args: InferRequestType<(typeof client.modalities)[':id']['store']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id'].store.$post(args, options))
}

export async function postModalitiesIdStoreStraight(
  args: InferRequestType<(typeof client.modalities)[':id']['store-straight']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modalities[':id']['store-straight'].$post(args, options))
}

export async function getPatients(
  args: InferRequestType<typeof client.patients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients.$get(args, options))
}

export async function getPatientsId(
  args: InferRequestType<(typeof client.patients)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].$get(args, options))
}

export async function deletePatientsId(
  args: InferRequestType<(typeof client.patients)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].$delete(args, options))
}

export async function postPatientsIdAnonymize(
  args: InferRequestType<(typeof client.patients)[':id']['anonymize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].anonymize.$post(args, options))
}

export async function getPatientsIdArchive(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].archive.$get(args, options))
}

export async function postPatientsIdArchive(
  args: InferRequestType<(typeof client.patients)[':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].archive.$post(args, options))
}

export async function getPatientsIdAttachments(
  args: InferRequestType<(typeof client.patients)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].attachments.$get(args, options))
}

export async function getPatientsIdAttachmentsName(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].attachments[':name'].$get(args, options))
}

export async function putPatientsIdAttachmentsName(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].attachments[':name'].$put(args, options))
}

export async function deletePatientsIdAttachmentsName(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].attachments[':name'].$delete(args, options))
}

export async function postPatientsIdAttachmentsNameCompress(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patients[':id'].attachments[':name'].compress.$post(args, options),
  )
}

export async function getPatientsIdAttachmentsNameCompressedData(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patients[':id'].attachments[':name']['compressed-data'].$get(args, options),
  )
}

export async function getPatientsIdAttachmentsNameCompressedMd5(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patients[':id'].attachments[':name']['compressed-md5'].$get(args, options),
  )
}

export async function getPatientsIdAttachmentsNameCompressedSize(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patients[':id'].attachments[':name']['compressed-size'].$get(args, options),
  )
}

export async function getPatientsIdAttachmentsNameData(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].attachments[':name'].data.$get(args, options))
}

export async function getPatientsIdAttachmentsNameInfo(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].attachments[':name'].info.$get(args, options))
}

export async function getPatientsIdAttachmentsNameIsCompressed(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patients[':id'].attachments[':name']['is-compressed'].$get(args, options),
  )
}

export async function getPatientsIdAttachmentsNameMd5(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].attachments[':name'].md5.$get(args, options))
}

export async function getPatientsIdAttachmentsNameSize(
  args: InferRequestType<(typeof client.patients)[':id']['attachments'][':name']['size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].attachments[':name'].size.$get(args, options))
}

export async function postPatientsIdAttachmentsNameUncompress(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['uncompress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patients[':id'].attachments[':name'].uncompress.$post(args, options),
  )
}

export async function postPatientsIdAttachmentsNameVerifyMd5(
  args: InferRequestType<
    (typeof client.patients)[':id']['attachments'][':name']['verify-md5']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.patients[':id'].attachments[':name']['verify-md5'].$post(args, options),
  )
}

export async function getPatientsIdInstances(
  args: InferRequestType<(typeof client.patients)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].instances.$get(args, options))
}

export async function getPatientsIdInstancesTags(
  args: InferRequestType<(typeof client.patients)[':id']['instances-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id']['instances-tags'].$get(args, options))
}

export async function getPatientsIdMedia(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].media.$get(args, options))
}

export async function postPatientsIdMedia(
  args: InferRequestType<(typeof client.patients)[':id']['media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].media.$post(args, options))
}

export async function getPatientsIdMetadata(
  args: InferRequestType<(typeof client.patients)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].metadata.$get(args, options))
}

export async function getPatientsIdMetadataName(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].metadata[':name'].$get(args, options))
}

export async function putPatientsIdMetadataName(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].metadata[':name'].$put(args, options))
}

export async function deletePatientsIdMetadataName(
  args: InferRequestType<(typeof client.patients)[':id']['metadata'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].metadata[':name'].$delete(args, options))
}

export async function postPatientsIdModify(
  args: InferRequestType<(typeof client.patients)[':id']['modify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].modify.$post(args, options))
}

export async function getPatientsIdModule(
  args: InferRequestType<(typeof client.patients)[':id']['module']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].module.$get(args, options))
}

export async function getPatientsIdProtected(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].protected.$get(args, options))
}

export async function putPatientsIdProtected(
  args: InferRequestType<(typeof client.patients)[':id']['protected']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].protected.$put(args, options))
}

export async function postPatientsIdReconstruct(
  args: InferRequestType<(typeof client.patients)[':id']['reconstruct']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].reconstruct.$post(args, options))
}

export async function getPatientsIdSeries(
  args: InferRequestType<(typeof client.patients)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].series.$get(args, options))
}

export async function getPatientsIdSharedTags(
  args: InferRequestType<(typeof client.patients)[':id']['shared-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id']['shared-tags'].$get(args, options))
}

export async function getPatientsIdStatistics(
  args: InferRequestType<(typeof client.patients)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].statistics.$get(args, options))
}

export async function getPatientsIdStudies(
  args: InferRequestType<(typeof client.patients)[':id']['studies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.patients[':id'].studies.$get(args, options))
}

export async function getPeers(
  args: InferRequestType<typeof client.peers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers.$get(args, options))
}

export async function getPeersId(
  args: InferRequestType<(typeof client.peers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers[':id'].$get(args, options))
}

export async function putPeersId(
  args: InferRequestType<(typeof client.peers)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers[':id'].$put(args, options))
}

export async function deletePeersId(
  args: InferRequestType<(typeof client.peers)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers[':id'].$delete(args, options))
}

export async function getPeersIdConfiguration(
  args: InferRequestType<(typeof client.peers)[':id']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers[':id'].configuration.$get(args, options))
}

export async function postPeersIdStore(
  args: InferRequestType<(typeof client.peers)[':id']['store']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers[':id'].store.$post(args, options))
}

export async function postPeersIdStoreStraight(
  args: InferRequestType<(typeof client.peers)[':id']['store-straight']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers[':id']['store-straight'].$post(args, options))
}

export async function getPeersIdSystem(
  args: InferRequestType<(typeof client.peers)[':id']['system']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.peers[':id'].system.$get(args, options))
}

export async function getPlugins(options?: ClientRequestOptions) {
  return await parseResponse(client.plugins.$get(undefined, options))
}

export async function getPluginsExplorerJs(options?: ClientRequestOptions) {
  return await parseResponse(client.plugins['explorer.js'].$get(undefined, options))
}

export async function getPluginsId(
  args: InferRequestType<(typeof client.plugins)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':id'].$get(args, options))
}

export async function getQueries(options?: ClientRequestOptions) {
  return await parseResponse(client.queries.$get(undefined, options))
}

export async function getQueriesId(
  args: InferRequestType<(typeof client.queries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].$get(args, options))
}

export async function deleteQueriesId(
  args: InferRequestType<(typeof client.queries)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].$delete(args, options))
}

export async function getQueriesIdAnswers(
  args: InferRequestType<(typeof client.queries)[':id']['answers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].answers.$get(args, options))
}

export async function getQueriesIdAnswersIndex(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].answers[':index'].$get(args, options))
}

export async function getQueriesIdAnswersIndexContent(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].answers[':index'].content.$get(args, options))
}

export async function postQueriesIdAnswersIndexQueryInstances(
  args: InferRequestType<
    (typeof client.queries)[':id']['answers'][':index']['query-instances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queries[':id'].answers[':index']['query-instances'].$post(args, options),
  )
}

export async function postQueriesIdAnswersIndexQuerySeries(
  args: InferRequestType<
    (typeof client.queries)[':id']['answers'][':index']['query-series']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queries[':id'].answers[':index']['query-series'].$post(args, options),
  )
}

export async function postQueriesIdAnswersIndexQueryStudies(
  args: InferRequestType<
    (typeof client.queries)[':id']['answers'][':index']['query-studies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.queries[':id'].answers[':index']['query-studies'].$post(args, options),
  )
}

export async function postQueriesIdAnswersIndexRetrieve(
  args: InferRequestType<(typeof client.queries)[':id']['answers'][':index']['retrieve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].answers[':index'].retrieve.$post(args, options))
}

export async function getQueriesIdLevel(
  args: InferRequestType<(typeof client.queries)[':id']['level']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].level.$get(args, options))
}

export async function getQueriesIdModality(
  args: InferRequestType<(typeof client.queries)[':id']['modality']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].modality.$get(args, options))
}

export async function getQueriesIdQuery(
  args: InferRequestType<(typeof client.queries)[':id']['query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].query.$get(args, options))
}

export async function postQueriesIdRetrieve(
  args: InferRequestType<(typeof client.queries)[':id']['retrieve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.queries[':id'].retrieve.$post(args, options))
}

export async function getSeries(
  args: InferRequestType<typeof client.series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series.$get(args, options))
}

export async function getSeriesId(
  args: InferRequestType<(typeof client.series)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].$get(args, options))
}

export async function deleteSeriesId(
  args: InferRequestType<(typeof client.series)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].$delete(args, options))
}

export async function postSeriesIdAnonymize(
  args: InferRequestType<(typeof client.series)[':id']['anonymize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].anonymize.$post(args, options))
}

export async function getSeriesIdArchive(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].archive.$get(args, options))
}

export async function postSeriesIdArchive(
  args: InferRequestType<(typeof client.series)[':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].archive.$post(args, options))
}

export async function getSeriesIdAttachments(
  args: InferRequestType<(typeof client.series)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].attachments.$get(args, options))
}

export async function getSeriesIdAttachmentsName(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].attachments[':name'].$get(args, options))
}

export async function putSeriesIdAttachmentsName(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].attachments[':name'].$put(args, options))
}

export async function deleteSeriesIdAttachmentsName(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].attachments[':name'].$delete(args, options))
}

export async function postSeriesIdAttachmentsNameCompress(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.series[':id'].attachments[':name'].compress.$post(args, options),
  )
}

export async function getSeriesIdAttachmentsNameCompressedData(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.series[':id'].attachments[':name']['compressed-data'].$get(args, options),
  )
}

export async function getSeriesIdAttachmentsNameCompressedMd5(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.series[':id'].attachments[':name']['compressed-md5'].$get(args, options),
  )
}

export async function getSeriesIdAttachmentsNameCompressedSize(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.series[':id'].attachments[':name']['compressed-size'].$get(args, options),
  )
}

export async function getSeriesIdAttachmentsNameData(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].attachments[':name'].data.$get(args, options))
}

export async function getSeriesIdAttachmentsNameInfo(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].attachments[':name'].info.$get(args, options))
}

export async function getSeriesIdAttachmentsNameIsCompressed(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.series[':id'].attachments[':name']['is-compressed'].$get(args, options),
  )
}

export async function getSeriesIdAttachmentsNameMd5(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].attachments[':name'].md5.$get(args, options))
}

export async function getSeriesIdAttachmentsNameSize(
  args: InferRequestType<(typeof client.series)[':id']['attachments'][':name']['size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].attachments[':name'].size.$get(args, options))
}

export async function postSeriesIdAttachmentsNameUncompress(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['uncompress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.series[':id'].attachments[':name'].uncompress.$post(args, options),
  )
}

export async function postSeriesIdAttachmentsNameVerifyMd5(
  args: InferRequestType<
    (typeof client.series)[':id']['attachments'][':name']['verify-md5']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.series[':id'].attachments[':name']['verify-md5'].$post(args, options),
  )
}

export async function getSeriesIdInstances(
  args: InferRequestType<(typeof client.series)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].instances.$get(args, options))
}

export async function getSeriesIdInstancesTags(
  args: InferRequestType<(typeof client.series)[':id']['instances-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id']['instances-tags'].$get(args, options))
}

export async function getSeriesIdMedia(
  args: InferRequestType<(typeof client.series)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].media.$get(args, options))
}

export async function postSeriesIdMedia(
  args: InferRequestType<(typeof client.series)[':id']['media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].media.$post(args, options))
}

export async function getSeriesIdMetadata(
  args: InferRequestType<(typeof client.series)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].metadata.$get(args, options))
}

export async function getSeriesIdMetadataName(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].metadata[':name'].$get(args, options))
}

export async function putSeriesIdMetadataName(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].metadata[':name'].$put(args, options))
}

export async function deleteSeriesIdMetadataName(
  args: InferRequestType<(typeof client.series)[':id']['metadata'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].metadata[':name'].$delete(args, options))
}

export async function postSeriesIdModify(
  args: InferRequestType<(typeof client.series)[':id']['modify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].modify.$post(args, options))
}

export async function getSeriesIdModule(
  args: InferRequestType<(typeof client.series)[':id']['module']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].module.$get(args, options))
}

export async function getSeriesIdNumpy(
  args: InferRequestType<(typeof client.series)[':id']['numpy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].numpy.$get(args, options))
}

export async function getSeriesIdOrderedSlices(
  args: InferRequestType<(typeof client.series)[':id']['ordered-slices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id']['ordered-slices'].$get(args, options))
}

export async function getSeriesIdPatient(
  args: InferRequestType<(typeof client.series)[':id']['patient']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].patient.$get(args, options))
}

export async function postSeriesIdReconstruct(
  args: InferRequestType<(typeof client.series)[':id']['reconstruct']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].reconstruct.$post(args, options))
}

export async function getSeriesIdSharedTags(
  args: InferRequestType<(typeof client.series)[':id']['shared-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id']['shared-tags'].$get(args, options))
}

export async function getSeriesIdStatistics(
  args: InferRequestType<(typeof client.series)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].statistics.$get(args, options))
}

export async function getSeriesIdStudy(
  args: InferRequestType<(typeof client.series)[':id']['study']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.series[':id'].study.$get(args, options))
}

export async function getStatistics(options?: ClientRequestOptions) {
  return await parseResponse(client.statistics.$get(undefined, options))
}

export async function getStorageCommitmentId(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['storage-commitment'][':id'].$get(args, options))
}

export async function postStorageCommitmentIdRemove(
  args: InferRequestType<(typeof client)['storage-commitment'][':id']['remove']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['storage-commitment'][':id'].remove.$post(args, options))
}

export async function getStudies(
  args: InferRequestType<typeof client.studies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies.$get(args, options))
}

export async function getStudiesId(
  args: InferRequestType<(typeof client.studies)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].$get(args, options))
}

export async function deleteStudiesId(
  args: InferRequestType<(typeof client.studies)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].$delete(args, options))
}

export async function postStudiesIdAnonymize(
  args: InferRequestType<(typeof client.studies)[':id']['anonymize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].anonymize.$post(args, options))
}

export async function getStudiesIdArchive(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].archive.$get(args, options))
}

export async function postStudiesIdArchive(
  args: InferRequestType<(typeof client.studies)[':id']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].archive.$post(args, options))
}

export async function getStudiesIdAttachments(
  args: InferRequestType<(typeof client.studies)[':id']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].attachments.$get(args, options))
}

export async function getStudiesIdAttachmentsName(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].attachments[':name'].$get(args, options))
}

export async function putStudiesIdAttachmentsName(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].attachments[':name'].$put(args, options))
}

export async function deleteStudiesIdAttachmentsName(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].attachments[':name'].$delete(args, options))
}

export async function postStudiesIdAttachmentsNameCompress(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.studies[':id'].attachments[':name'].compress.$post(args, options),
  )
}

export async function getStudiesIdAttachmentsNameCompressedData(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-data']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.studies[':id'].attachments[':name']['compressed-data'].$get(args, options),
  )
}

export async function getStudiesIdAttachmentsNameCompressedMd5(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-md5']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.studies[':id'].attachments[':name']['compressed-md5'].$get(args, options),
  )
}

export async function getStudiesIdAttachmentsNameCompressedSize(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['compressed-size']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.studies[':id'].attachments[':name']['compressed-size'].$get(args, options),
  )
}

export async function getStudiesIdAttachmentsNameData(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].attachments[':name'].data.$get(args, options))
}

export async function getStudiesIdAttachmentsNameInfo(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].attachments[':name'].info.$get(args, options))
}

export async function getStudiesIdAttachmentsNameIsCompressed(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['is-compressed']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.studies[':id'].attachments[':name']['is-compressed'].$get(args, options),
  )
}

export async function getStudiesIdAttachmentsNameMd5(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['md5']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].attachments[':name'].md5.$get(args, options))
}

export async function getStudiesIdAttachmentsNameSize(
  args: InferRequestType<(typeof client.studies)[':id']['attachments'][':name']['size']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].attachments[':name'].size.$get(args, options))
}

export async function postStudiesIdAttachmentsNameUncompress(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['uncompress']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.studies[':id'].attachments[':name'].uncompress.$post(args, options),
  )
}

export async function postStudiesIdAttachmentsNameVerifyMd5(
  args: InferRequestType<
    (typeof client.studies)[':id']['attachments'][':name']['verify-md5']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.studies[':id'].attachments[':name']['verify-md5'].$post(args, options),
  )
}

export async function getStudiesIdInstances(
  args: InferRequestType<(typeof client.studies)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].instances.$get(args, options))
}

export async function getStudiesIdInstancesTags(
  args: InferRequestType<(typeof client.studies)[':id']['instances-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id']['instances-tags'].$get(args, options))
}

export async function getStudiesIdMedia(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].media.$get(args, options))
}

export async function postStudiesIdMedia(
  args: InferRequestType<(typeof client.studies)[':id']['media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].media.$post(args, options))
}

export async function postStudiesIdMerge(
  args: InferRequestType<(typeof client.studies)[':id']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].merge.$post(args, options))
}

export async function getStudiesIdMetadata(
  args: InferRequestType<(typeof client.studies)[':id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].metadata.$get(args, options))
}

export async function getStudiesIdMetadataName(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].metadata[':name'].$get(args, options))
}

export async function putStudiesIdMetadataName(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].metadata[':name'].$put(args, options))
}

export async function deleteStudiesIdMetadataName(
  args: InferRequestType<(typeof client.studies)[':id']['metadata'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].metadata[':name'].$delete(args, options))
}

export async function postStudiesIdModify(
  args: InferRequestType<(typeof client.studies)[':id']['modify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].modify.$post(args, options))
}

export async function getStudiesIdModule(
  args: InferRequestType<(typeof client.studies)[':id']['module']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].module.$get(args, options))
}

export async function getStudiesIdModulePatient(
  args: InferRequestType<(typeof client.studies)[':id']['module-patient']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id']['module-patient'].$get(args, options))
}

export async function getStudiesIdPatient(
  args: InferRequestType<(typeof client.studies)[':id']['patient']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].patient.$get(args, options))
}

export async function postStudiesIdReconstruct(
  args: InferRequestType<(typeof client.studies)[':id']['reconstruct']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].reconstruct.$post(args, options))
}

export async function getStudiesIdSeries(
  args: InferRequestType<(typeof client.studies)[':id']['series']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].series.$get(args, options))
}

export async function getStudiesIdSharedTags(
  args: InferRequestType<(typeof client.studies)[':id']['shared-tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id']['shared-tags'].$get(args, options))
}

export async function postStudiesIdSplit(
  args: InferRequestType<(typeof client.studies)[':id']['split']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].split.$post(args, options))
}

export async function getStudiesIdStatistics(
  args: InferRequestType<(typeof client.studies)[':id']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.studies[':id'].statistics.$get(args, options))
}

export async function getSystem(options?: ClientRequestOptions) {
  return await parseResponse(client.system.$get(undefined, options))
}

export async function getTools(options?: ClientRequestOptions) {
  return await parseResponse(client.tools.$get(undefined, options))
}

export async function getToolsAcceptedTransferSyntaxes(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['accepted-transfer-syntaxes'].$get(undefined, options))
}

export async function putToolsAcceptedTransferSyntaxes(
  args: InferRequestType<(typeof client.tools)['accepted-transfer-syntaxes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['accepted-transfer-syntaxes'].$put(args, options))
}

export async function postToolsBulkAnonymize(
  args: InferRequestType<(typeof client.tools)['bulk-anonymize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['bulk-anonymize'].$post(args, options))
}

export async function postToolsBulkContent(
  args: InferRequestType<(typeof client.tools)['bulk-content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['bulk-content'].$post(args, options))
}

export async function postToolsBulkDelete(
  args: InferRequestType<(typeof client.tools)['bulk-delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['bulk-delete'].$post(args, options))
}

export async function postToolsBulkModify(
  args: InferRequestType<(typeof client.tools)['bulk-modify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['bulk-modify'].$post(args, options))
}

export async function postToolsCreateArchive(
  args: InferRequestType<(typeof client.tools)['create-archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['create-archive'].$post(args, options))
}

export async function postToolsCreateDicom(
  args: InferRequestType<(typeof client.tools)['create-dicom']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['create-dicom'].$post(args, options))
}

export async function postToolsCreateMedia(
  args: InferRequestType<(typeof client.tools)['create-media']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['create-media'].$post(args, options))
}

export async function postToolsCreateMediaExtended(
  args: InferRequestType<(typeof client.tools)['create-media-extended']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['create-media-extended'].$post(args, options))
}

export async function getToolsDefaultEncoding(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['default-encoding'].$get(undefined, options))
}

export async function putToolsDefaultEncoding(
  args: InferRequestType<(typeof client.tools)['default-encoding']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['default-encoding'].$put(args, options))
}

export async function getToolsDicomConformance(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['dicom-conformance'].$get(undefined, options))
}

export async function postToolsDicomEcho(
  args: InferRequestType<(typeof client.tools)['dicom-echo']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['dicom-echo'].$post(args, options))
}

export async function postToolsExecuteScript(
  args: InferRequestType<(typeof client.tools)['execute-script']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['execute-script'].$post(args, options))
}

export async function postToolsFind(
  args: InferRequestType<typeof client.tools.find.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools.find.$post(args, options))
}

export async function getToolsGenerateUid(
  args: InferRequestType<(typeof client.tools)['generate-uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['generate-uid'].$get(args, options))
}

export async function postToolsInvalidateTags(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['invalidate-tags'].$post(undefined, options))
}

export async function getToolsLogLevel(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['log-level'].$get(undefined, options))
}

export async function putToolsLogLevel(
  args: InferRequestType<(typeof client.tools)['log-level']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['log-level'].$put(args, options))
}

export async function getToolsLogLevelDicom(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['log-level-dicom'].$get(undefined, options))
}

export async function putToolsLogLevelDicom(
  args: InferRequestType<(typeof client.tools)['log-level-dicom']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['log-level-dicom'].$put(args, options))
}

export async function getToolsLogLevelGeneric(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['log-level-generic'].$get(undefined, options))
}

export async function putToolsLogLevelGeneric(
  args: InferRequestType<(typeof client.tools)['log-level-generic']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['log-level-generic'].$put(args, options))
}

export async function getToolsLogLevelHttp(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['log-level-http'].$get(undefined, options))
}

export async function putToolsLogLevelHttp(
  args: InferRequestType<(typeof client.tools)['log-level-http']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['log-level-http'].$put(args, options))
}

export async function getToolsLogLevelJobs(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['log-level-jobs'].$get(undefined, options))
}

export async function putToolsLogLevelJobs(
  args: InferRequestType<(typeof client.tools)['log-level-jobs']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['log-level-jobs'].$put(args, options))
}

export async function getToolsLogLevelLua(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['log-level-lua'].$get(undefined, options))
}

export async function putToolsLogLevelLua(
  args: InferRequestType<(typeof client.tools)['log-level-lua']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['log-level-lua'].$put(args, options))
}

export async function getToolsLogLevelPlugins(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['log-level-plugins'].$get(undefined, options))
}

export async function putToolsLogLevelPlugins(
  args: InferRequestType<(typeof client.tools)['log-level-plugins']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['log-level-plugins'].$put(args, options))
}

export async function getToolsLogLevelSqlite(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['log-level-sqlite'].$get(undefined, options))
}

export async function putToolsLogLevelSqlite(
  args: InferRequestType<(typeof client.tools)['log-level-sqlite']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['log-level-sqlite'].$put(args, options))
}

export async function postToolsLookup(
  args: InferRequestType<typeof client.tools.lookup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools.lookup.$post(args, options))
}

export async function getToolsMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.tools.metrics.$get(undefined, options))
}

export async function putToolsMetrics(
  args: InferRequestType<typeof client.tools.metrics.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools.metrics.$put(args, options))
}

export async function getToolsMetricsPrometheus(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['metrics-prometheus'].$get(undefined, options))
}

export async function getToolsNow(options?: ClientRequestOptions) {
  return await parseResponse(client.tools.now.$get(undefined, options))
}

export async function getToolsNowLocal(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['now-local'].$get(undefined, options))
}

export async function postToolsReconstruct(
  args: InferRequestType<typeof client.tools.reconstruct.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools.reconstruct.$post(args, options))
}

export async function postToolsReset(options?: ClientRequestOptions) {
  return await parseResponse(client.tools.reset.$post(undefined, options))
}

export async function postToolsShutdown(options?: ClientRequestOptions) {
  return await parseResponse(client.tools.shutdown.$post(undefined, options))
}

export async function getToolsUnknownSopClassAccepted(options?: ClientRequestOptions) {
  return await parseResponse(client.tools['unknown-sop-class-accepted'].$get(undefined, options))
}

export async function putToolsUnknownSopClassAccepted(
  args: InferRequestType<(typeof client.tools)['unknown-sop-class-accepted']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tools['unknown-sop-class-accepted'].$put(args, options))
}
