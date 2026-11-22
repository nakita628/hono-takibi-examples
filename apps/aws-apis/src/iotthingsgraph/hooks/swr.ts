import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceSearchThingsKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceTagResourceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceUntagResourceKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate'] as const
}

export function getXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsKey() {
  return ['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions'] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThing<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespace<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThing<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceGetEntities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceSearchEntities<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstances<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplates<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchThingsKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceSearchThings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceSearchThingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceTagResourceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.TagResource',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceTagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceUntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions',
    'POST',
  ] as const
}

export function usePostXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
