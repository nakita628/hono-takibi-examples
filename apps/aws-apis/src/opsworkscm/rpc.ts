import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetOpsWorksCMV20161101AssociateNode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101CreateBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101CreateServer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101DeleteBackup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101DeleteServer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101DescribeAccountAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101DescribeBackups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101DescribeEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101DescribeServers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101DisassociateNode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101ExportServerEngineAttribute(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101RestoreServer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101StartMaintenance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101UpdateServer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer'].$post(args, options),
  )
}

export async function postXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'].$post(
      args,
      options,
    ),
  )
}
