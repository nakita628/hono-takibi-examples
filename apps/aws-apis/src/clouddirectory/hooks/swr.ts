import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAmazonclouddirectoryKey() {
  return ['amazonclouddirectory'] as const
}

export function getPutAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/facets#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111ObjectFacetsXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111ObjectFacetsXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['facets#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/apply#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111SchemaApplyXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['apply#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['apply#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111SchemaApplyXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['apply#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema['apply#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/attach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111ObjectAttachXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['attach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['attach#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111ObjectAttachXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['attach#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['attach#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/policy/attach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111PolicyAttachXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attach#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111PolicyAttachXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attach#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].policy['attach#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111IndexAttachXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/index/attach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111IndexAttachXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['index']['attach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['index']['attach#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111IndexAttachXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['index']['attach#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].index['attach#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/attach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attach#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAmazonclouddirectory20170111TypedlinkAttachXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attach#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink['attach#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111BatchreadXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/batchread#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111BatchreadXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['batchread#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['batchread#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111BatchreadXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['batchread#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11']['batchread#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111BatchwriteXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/batchwrite#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111BatchwriteXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['batchwrite#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['batchwrite#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111BatchwriteXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['batchwrite#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11']['batchwrite#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/create#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111DirectoryCreateXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['create#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['create#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAmazonclouddirectory20170111DirectoryCreateXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['create#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].directory['create#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111FacetCreateXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet/create#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111FacetCreateXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet']['create#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet']['create#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111FacetCreateXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['facet']['create#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].facet['create#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111IndexXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/index#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111IndexXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['index#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['index#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111IndexXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['index#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11']['index#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111ObjectXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111ObjectXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111ObjectXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11']['object#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111SchemaCreateKey() {
  return ['amazonclouddirectory', '/amazonclouddirectory/2017-01-11/schema/create', 'PUT'] as const
}

export function usePutAmazonclouddirectory20170111SchemaCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['create']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['schema']['create']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111SchemaCreateKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['create']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema.create.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/create#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['create#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['create#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAmazonclouddirectory20170111TypedlinkFacetCreateXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['create#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink.facet[
            'create#x-amz-data-partition'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111DirectoryXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111DirectoryXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111DirectoryXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['directory#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11']['directory#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet/delete#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111FacetDeleteXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet']['delete#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet']['delete#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111FacetDeleteXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['facet']['delete#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].facet['delete#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/delete#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111ObjectDeleteXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['delete#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['delete#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111ObjectDeleteXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['delete#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['delete#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111SchemaXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111SchemaXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111SchemaXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11']['schema#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/delete#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['delete#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['delete#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAmazonclouddirectory20170111TypedlinkFacetDeleteXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['delete#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink.facet[
            'delete#x-amz-data-partition'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111IndexDetachXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/index/detach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111IndexDetachXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['index']['detach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['index']['detach#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111IndexDetachXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['index']['detach#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].index['detach#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/detach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111ObjectDetachXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['detach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['detach#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111ObjectDetachXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['detach#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['detach#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/policy/detach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111PolicyDetachXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['policy']['detach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['policy']['detach#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111PolicyDetachXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['policy']['detach#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].policy['detach#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/detach#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['detach#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['detach#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAmazonclouddirectory20170111TypedlinkDetachXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['detach#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink['detach#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/disable#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111DirectoryDisableXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['disable#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['disable#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAmazonclouddirectory20170111DirectoryDisableXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['disable#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].directory['disable#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/enable#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111DirectoryEnableXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['enable#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['enable#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAmazonclouddirectory20170111DirectoryEnableXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['enable#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].directory['enable#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111SchemaGetappliedschemaKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/getappliedschema',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111SchemaGetappliedschema<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['getappliedschema']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['getappliedschema']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111SchemaGetappliedschemaKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['getappliedschema']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema.getappliedschema.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/get#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111DirectoryGetXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['get#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['get#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111DirectoryGetXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['get#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].directory['get#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111FacetXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111FacetXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111FacetXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11']['facet#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111FacetXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111FacetXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111FacetXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['facet#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11']['facet#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/attributes/get#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['get#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['get#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111TypedlinkAttributesGetXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['get#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink.attributes[
            'get#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/attributes/get#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes']['get#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes']['get#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111ObjectAttributesGetXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes']['get#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object.attributes[
            'get#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/information#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111ObjectInformationXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['information#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['information#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111ObjectInformationXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['information#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object[
            'information#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111SchemaJsonXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema['json#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/json#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111SchemaJsonXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111SchemaJsonXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['json#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema['json#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/get#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['get#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['get#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111TypedlinkFacetGetXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['get#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink.facet[
            'get#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111SchemaAppliedKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/applied',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111SchemaApplied<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['applied']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['applied']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111SchemaAppliedKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['applied']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema.applied.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/indices#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111ObjectIndicesXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['indices#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['indices#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111ObjectIndicesXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['indices#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['indices#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111SchemaDevelopmentKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/development',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111SchemaDevelopment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['development']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['development']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111SchemaDevelopmentKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['development']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema.development.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111DirectoryListKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/directory/list',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111DirectoryList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['directory']['list']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['directory']['list']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111DirectoryListKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['directory']['list']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].directory.list.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet/attributes#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111FacetAttributesXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet']['attributes#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet']['attributes#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111FacetAttributesXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['facet']['attributes#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].facet['attributes#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111FacetListXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/facet/list#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111FacetListXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['facet']['list#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['facet']['list#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111FacetListXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['facet']['list#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].facet['list#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/incoming#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['incoming#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['incoming#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111TypedlinkIncomingXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['incoming#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink[
            'incoming#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/index/targets#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111IndexTargetsXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['index']['targets#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['index']['targets#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111IndexTargetsXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['index']['targets#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].index['targets#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111SchemaManagedKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/managed',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111SchemaManaged<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['managed']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['managed']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111SchemaManagedKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['managed']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema.managed.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/attributes#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111ObjectAttributesXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111ObjectAttributesXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['attributes#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['attributes#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/children#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111ObjectChildrenXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['children#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['children#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111ObjectChildrenXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['children#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['children#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/parentpaths#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['parentpaths#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['parentpaths#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111ObjectParentpathsXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['parentpaths#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object[
            'parentpaths#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111ObjectParentXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/parent#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111ObjectParentXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['parent#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['parent#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111ObjectParentXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['parent#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['parent#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/policy#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111ObjectPolicyXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['policy#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['policy#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111ObjectPolicyXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['policy#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['policy#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/outgoing#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['outgoing#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['outgoing#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111TypedlinkOutgoingXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['outgoing#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink[
            'outgoing#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/policy/attachment#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attachment#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attachment#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111PolicyAttachmentXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['policy']['attachment#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].policy['attachment#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111SchemaPublishedKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/published',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111SchemaPublished<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['published']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['published']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111SchemaPublishedKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['published']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema.published.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111TagsKey() {
  return ['amazonclouddirectory', '/amazonclouddirectory/2017-01-11/tags', 'POST'] as const
}

export function usePostAmazonclouddirectory20170111Tags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111TagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['$post']>
        },
      ) => parseResponse(client.amazonclouddirectory['2017-01-11'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/attributes#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['attributes#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['attributes#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111TypedlinkFacetAttributesXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['attributes#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink.facet[
            'attributes#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet/list#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['list#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['list#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111TypedlinkFacetListXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet']['list#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink.facet[
            'list#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/policy/lookup#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111PolicyLookupXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['policy']['lookup#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['policy']['lookup#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAmazonclouddirectory20170111PolicyLookupXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['policy']['lookup#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].policy['lookup#x-amz-data-partition'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/publish#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111SchemaPublishXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['publish#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['publish#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111SchemaPublishXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['publish#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema['publish#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/facets/delete#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets']['delete#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets']['delete#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAmazonclouddirectory20170111ObjectFacetsDeleteXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['facets']['delete#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object.facets[
            'delete#x-amz-data-partition'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111TagsAddKey() {
  return ['amazonclouddirectory', '/amazonclouddirectory/2017-01-11/tags/add', 'PUT'] as const
}

export function usePutAmazonclouddirectory20170111TagsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['add']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['add']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111TagsAddKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['tags']['add']['$put']
          >
        },
      ) =>
        parseResponse(client.amazonclouddirectory['2017-01-11'].tags.add.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111TagsRemoveKey() {
  return ['amazonclouddirectory', '/amazonclouddirectory/2017-01-11/tags/remove', 'PUT'] as const
}

export function usePutAmazonclouddirectory20170111TagsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['remove']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.amazonclouddirectory)['2017-01-11']['tags']['remove']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111TagsRemoveKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['tags']['remove']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].tags.remove.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/attributes/update#x-amz-data-partition',
    'POST',
  ] as const
}

export function usePostAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['update#x-amz-data-partition']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['update#x-amz-data-partition']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAmazonclouddirectory20170111TypedlinkAttributesUpdateXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['attributes']['update#x-amz-data-partition']['$post']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink.attributes[
            'update#x-amz-data-partition'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/object/update#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111ObjectUpdateXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['object']['update#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['object']['update#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111ObjectUpdateXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['object']['update#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].object['update#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/update#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111SchemaUpdateXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['update#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['update#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111SchemaUpdateXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['update#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema['update#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/typedlink/facet#x-amz-data-partition',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartition<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet#x-amz-data-partition']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet#x-amz-data-partition']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111TypedlinkFacetXAmzDataPartitionKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['typedlink']['facet#x-amz-data-partition']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].typedlink['facet#x-amz-data-partition'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111SchemaUpgradeappliedKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/upgradeapplied',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111SchemaUpgradeapplied<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradeapplied']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradeapplied']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111SchemaUpgradeappliedKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradeapplied']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema.upgradeapplied.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAmazonclouddirectory20170111SchemaUpgradepublishedKey() {
  return [
    'amazonclouddirectory',
    '/amazonclouddirectory/2017-01-11/schema/upgradepublished',
    'PUT',
  ] as const
}

export function usePutAmazonclouddirectory20170111SchemaUpgradepublished<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradepublished']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradepublished']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAmazonclouddirectory20170111SchemaUpgradepublishedKey()
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
            (typeof client.amazonclouddirectory)['2017-01-11']['schema']['upgradepublished']['$put']
          >
        },
      ) =>
        parseResponse(
          client.amazonclouddirectory['2017-01-11'].schema.upgradepublished.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
