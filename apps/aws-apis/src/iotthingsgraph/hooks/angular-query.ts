import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespaceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceGetEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessages<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessagesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceSearchEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstancesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchThingsMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceSearchThingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceSearchThingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceSearchThings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceSearchThingsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.TagResource',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceTagResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstance<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstanceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceUntagResourceMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplateMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsMutationKey() {
  return [
    '#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions',
    '/#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions',
    'POST',
  ] as const
}

export function getPostXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitionsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
