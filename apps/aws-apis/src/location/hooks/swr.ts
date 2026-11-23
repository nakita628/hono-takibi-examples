import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGeofencingKey() {
  return ['geofencing'] as const
}

export function getMapsKey() {
  return ['maps'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getPlacesKey() {
  return ['places'] as const
}

export function getRoutesKey() {
  return ['routes'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTrackingKey() {
  return ['tracking'] as const
}

export function getPostTrackingV0TrackersTrackerNameConsumersKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/consumers', 'POST'] as const
}

export function usePostTrackingV0TrackersTrackerNameConsumers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0TrackersTrackerNameConsumersKey()
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
            (typeof client.tracking.v0.trackers)[':TrackerName']['consumers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName'].consumers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTrackingV0TrackersTrackerNameDeletePositionsKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/delete-positions', 'POST'] as const
}

export function usePostTrackingV0TrackersTrackerNameDeletePositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0TrackersTrackerNameDeletePositionsKey()
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
            (typeof client.tracking.v0.trackers)[':TrackerName']['delete-positions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName']['delete-positions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGeofencingV0CollectionsCollectionNameDeleteGeofencesKey() {
  return [
    'geofencing',
    '/geofencing/v0/collections/:CollectionName/delete-geofences',
    'POST',
  ] as const
}

export function usePostGeofencingV0CollectionsCollectionNameDeleteGeofences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencingV0CollectionsCollectionNameDeleteGeofencesKey()
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
            (typeof client.geofencing.v0.collections)[':CollectionName']['delete-geofences']['$post']
          >
        },
      ) =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName']['delete-geofences'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGeofencingV0CollectionsCollectionNamePositionsKey() {
  return ['geofencing', '/geofencing/v0/collections/:CollectionName/positions', 'POST'] as const
}

export function usePostGeofencingV0CollectionsCollectionNamePositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencingV0CollectionsCollectionNamePositionsKey()
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
            (typeof client.geofencing.v0.collections)[':CollectionName']['positions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName'].positions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTrackingV0TrackersTrackerNameGetPositionsKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/get-positions', 'POST'] as const
}

export function usePostTrackingV0TrackersTrackerNameGetPositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0TrackersTrackerNameGetPositionsKey()
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
            (typeof client.tracking.v0.trackers)[':TrackerName']['get-positions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName']['get-positions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGeofencingV0CollectionsCollectionNamePutGeofencesKey() {
  return ['geofencing', '/geofencing/v0/collections/:CollectionName/put-geofences', 'POST'] as const
}

export function usePostGeofencingV0CollectionsCollectionNamePutGeofences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencingV0CollectionsCollectionNamePutGeofencesKey()
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
            (typeof client.geofencing.v0.collections)[':CollectionName']['put-geofences']['$post']
          >
        },
      ) =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName']['put-geofences'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTrackingV0TrackersTrackerNamePositionsKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/positions', 'POST'] as const
}

export function usePostTrackingV0TrackersTrackerNamePositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0TrackersTrackerNamePositionsKey()
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
            (typeof client.tracking.v0.trackers)[':TrackerName']['positions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName'].positions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRoutesV0CalculatorsCalculatorNameCalculateRouteKey() {
  return ['routes', '/routes/v0/calculators/:CalculatorName/calculate/route', 'POST'] as const
}

export function usePostRoutesV0CalculatorsCalculatorNameCalculateRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutesV0CalculatorsCalculatorNameCalculateRouteKey()
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
            (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route']['$post']
          >
        },
      ) =>
        parseResponse(
          client.routes.v0.calculators[':CalculatorName'].calculate.route.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixKey() {
  return [
    'routes',
    '/routes/v0/calculators/:CalculatorName/calculate/route-matrix',
    'POST',
  ] as const
}

export function usePostRoutesV0CalculatorsCalculatorNameCalculateRouteMatrix<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutesV0CalculatorsCalculatorNameCalculateRouteMatrixKey()
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
            (typeof client.routes.v0.calculators)[':CalculatorName']['calculate']['route-matrix']['$post']
          >
        },
      ) =>
        parseResponse(
          client.routes.v0.calculators[':CalculatorName'].calculate['route-matrix'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGeofencingV0CollectionsKey() {
  return ['geofencing', '/geofencing/v0/collections', 'POST'] as const
}

export function usePostGeofencingV0Collections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.geofencing.v0.collections.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.geofencing.v0.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencingV0CollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.geofencing.v0.collections.$post> },
      ) => parseResponse(client.geofencing.v0.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataV0KeysKey() {
  return ['metadata', '/metadata/v0/keys', 'POST'] as const
}

export function usePostMetadataV0Keys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.v0.keys.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata.v0.keys.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataV0KeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metadata.v0.keys.$post> }) =>
        parseResponse(client.metadata.v0.keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMapsV0MapsKey() {
  return ['maps', '/maps/v0/maps', 'POST'] as const
}

export function usePostMapsV0Maps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.maps.v0.maps.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.maps.v0.maps.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMapsV0MapsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.maps.v0.maps.$post> }) =>
        parseResponse(client.maps.v0.maps.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlacesV0IndexesKey() {
  return ['places', '/places/v0/indexes', 'POST'] as const
}

export function usePostPlacesV0Indexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.places.v0.indexes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.places.v0.indexes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlacesV0IndexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.places.v0.indexes.$post> }) =>
        parseResponse(client.places.v0.indexes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoutesV0CalculatorsKey() {
  return ['routes', '/routes/v0/calculators', 'POST'] as const
}

export function usePostRoutesV0Calculators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.routes.v0.calculators.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.routes.v0.calculators.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutesV0CalculatorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.routes.v0.calculators.$post> },
      ) => parseResponse(client.routes.v0.calculators.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTrackingV0TrackersKey() {
  return ['tracking', '/tracking/v0/trackers', 'POST'] as const
}

export function usePostTrackingV0Trackers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.tracking.v0.trackers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.tracking.v0.trackers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0TrackersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.tracking.v0.trackers.$post> },
      ) => parseResponse(client.tracking.v0.trackers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGeofencingV0CollectionsCollectionNameKey(
  args: InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['geofencing', '/geofencing/v0/collections/:CollectionName', keyArgs] as const
}

export function useGetGeofencingV0CollectionsCollectionName<TError = unknown>(
  args: InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeofencingV0CollectionsCollectionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofencingV0CollectionsCollectionName<TError = unknown>(
  args: InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeofencingV0CollectionsCollectionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteGeofencingV0CollectionsCollectionNameKey() {
  return ['geofencing', '/geofencing/v0/collections/:CollectionName', 'DELETE'] as const
}

export function useDeleteGeofencingV0CollectionsCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGeofencingV0CollectionsCollectionNameKey()
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
            (typeof client.geofencing.v0.collections)[':CollectionName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchGeofencingV0CollectionsCollectionNameKey() {
  return ['geofencing', '/geofencing/v0/collections/:CollectionName', 'PATCH'] as const
}

export function usePatchGeofencingV0CollectionsCollectionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.geofencing.v0.collections)[':CollectionName']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.geofencing.v0.collections)[':CollectionName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchGeofencingV0CollectionsCollectionNameKey()
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
            (typeof client.geofencing.v0.collections)[':CollectionName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetadataV0KeysKeyNameKey(
  args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['metadata', '/metadata/v0/keys/:KeyName', keyArgs] as const
}

export function useGetMetadataV0KeysKeyName<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataV0KeysKeyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.v0.keys[':KeyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetadataV0KeysKeyName<TError = unknown>(
  args: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetadataV0KeysKeyNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metadata.v0.keys[':KeyName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMetadataV0KeysKeyNameKey() {
  return ['metadata', '/metadata/v0/keys/:KeyName', 'DELETE'] as const
}

export function useDeleteMetadataV0KeysKeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMetadataV0KeysKeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$delete']> },
      ) => parseResponse(client.metadata.v0.keys[':KeyName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMetadataV0KeysKeyNameKey() {
  return ['metadata', '/metadata/v0/keys/:KeyName', 'PATCH'] as const
}

export function usePatchMetadataV0KeysKeyName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMetadataV0KeysKeyNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.metadata.v0.keys)[':KeyName']['$patch']> },
      ) => parseResponse(client.metadata.v0.keys[':KeyName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMapsV0MapsMapNameKey(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName', keyArgs] as const
}

export function useGetMapsV0MapsMapName<TError = unknown>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maps.v0.maps[':MapName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapsV0MapsMapName<TError = unknown>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.maps.v0.maps[':MapName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMapsV0MapsMapNameKey() {
  return ['maps', '/maps/v0/maps/:MapName', 'DELETE'] as const
}

export function useDeleteMapsV0MapsMapName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMapsV0MapsMapNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$delete']> },
      ) => parseResponse(client.maps.v0.maps[':MapName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMapsV0MapsMapNameKey() {
  return ['maps', '/maps/v0/maps/:MapName', 'PATCH'] as const
}

export function usePatchMapsV0MapsMapName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maps.v0.maps)[':MapName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMapsV0MapsMapNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['$patch']> },
      ) => parseResponse(client.maps.v0.maps[':MapName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlacesV0IndexesIndexNameKey(
  args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['places', '/places/v0/indexes/:IndexName', keyArgs] as const
}

export function useGetPlacesV0IndexesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlacesV0IndexesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.places.v0.indexes[':IndexName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlacesV0IndexesIndexName<TError = unknown>(
  args: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlacesV0IndexesIndexNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.places.v0.indexes[':IndexName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePlacesV0IndexesIndexNameKey() {
  return ['places', '/places/v0/indexes/:IndexName', 'DELETE'] as const
}

export function useDeletePlacesV0IndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlacesV0IndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$delete']> },
      ) => parseResponse(client.places.v0.indexes[':IndexName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPlacesV0IndexesIndexNameKey() {
  return ['places', '/places/v0/indexes/:IndexName', 'PATCH'] as const
}

export function usePatchPlacesV0IndexesIndexName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.places.v0.indexes)[':IndexName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPlacesV0IndexesIndexNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['$patch']> },
      ) => parseResponse(client.places.v0.indexes[':IndexName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoutesV0CalculatorsCalculatorNameKey(
  args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['routes', '/routes/v0/calculators/:CalculatorName', keyArgs] as const
}

export function useGetRoutesV0CalculatorsCalculatorName<TError = unknown>(
  args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoutesV0CalculatorsCalculatorNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.routes.v0.calculators[':CalculatorName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoutesV0CalculatorsCalculatorName<TError = unknown>(
  args: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoutesV0CalculatorsCalculatorNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.routes.v0.calculators[':CalculatorName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRoutesV0CalculatorsCalculatorNameKey() {
  return ['routes', '/routes/v0/calculators/:CalculatorName', 'DELETE'] as const
}

export function useDeleteRoutesV0CalculatorsCalculatorName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoutesV0CalculatorsCalculatorNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$delete']>
        },
      ) =>
        parseResponse(client.routes.v0.calculators[':CalculatorName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchRoutesV0CalculatorsCalculatorNameKey() {
  return ['routes', '/routes/v0/calculators/:CalculatorName', 'PATCH'] as const
}

export function usePatchRoutesV0CalculatorsCalculatorName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRoutesV0CalculatorsCalculatorNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.routes.v0.calculators)[':CalculatorName']['$patch']>
        },
      ) =>
        parseResponse(client.routes.v0.calculators[':CalculatorName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTrackingV0TrackersTrackerNameKey(
  args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tracking', '/tracking/v0/trackers/:TrackerName', keyArgs] as const
}

export function useGetTrackingV0TrackersTrackerName<TError = unknown>(
  args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrackingV0TrackersTrackerNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tracking.v0.trackers[':TrackerName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingV0TrackersTrackerName<TError = unknown>(
  args: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrackingV0TrackersTrackerNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tracking.v0.trackers[':TrackerName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTrackingV0TrackersTrackerNameKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName', 'DELETE'] as const
}

export function useDeleteTrackingV0TrackersTrackerName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTrackingV0TrackersTrackerNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$delete']>
        },
      ) => parseResponse(client.tracking.v0.trackers[':TrackerName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTrackingV0TrackersTrackerNameKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName', 'PATCH'] as const
}

export function usePatchTrackingV0TrackersTrackerName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTrackingV0TrackersTrackerNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tracking.v0.trackers)[':TrackerName']['$patch']>
        },
      ) => parseResponse(client.tracking.v0.trackers[':TrackerName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTrackingV0TrackersTrackerNameConsumersConsumerArnKey() {
  return [
    'tracking',
    '/tracking/v0/trackers/:TrackerName/consumers/:ConsumerArn',
    'DELETE',
  ] as const
}

export function useDeleteTrackingV0TrackersTrackerNameConsumersConsumerArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTrackingV0TrackersTrackerNameConsumersConsumerArnKey()
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
            (typeof client.tracking.v0.trackers)[':TrackerName']['consumers'][':ConsumerArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName'].consumers[':ConsumerArn'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestKey(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'tracking',
    '/tracking/v0/trackers/:TrackerName/devices/:DeviceId/positions/latest',
    keyArgs,
  ] as const
}

export function useGetTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatest<TError = unknown>(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName'].devices[':DeviceId'].positions.latest.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatest<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTrackingV0TrackersTrackerNameDevicesDeviceIdPositionsLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['positions']['latest']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName'].devices[':DeviceId'].positions.latest.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsKey() {
  return [
    'tracking',
    '/tracking/v0/trackers/:TrackerName/devices/:DeviceId/list-positions',
    'POST',
  ] as const
}

export function usePostTrackingV0TrackersTrackerNameDevicesDeviceIdListPositions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0TrackersTrackerNameDevicesDeviceIdListPositionsKey()
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
            (typeof client.tracking.v0.trackers)[':TrackerName']['devices'][':DeviceId']['list-positions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName'].devices[':DeviceId']['list-positions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdKey(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'geofencing',
    '/geofencing/v0/collections/:CollectionName/geofences/:GeofenceId',
    keyArgs,
  ] as const
}

export function useGetGeofencingV0CollectionsCollectionNameGeofencesGeofenceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName'].geofences[':GeofenceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGeofencingV0CollectionsCollectionNameGeofencesGeofenceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName'].geofences[':GeofenceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdKey() {
  return [
    'geofencing',
    '/geofencing/v0/collections/:CollectionName/geofences/:GeofenceId',
    'PUT',
  ] as const
}

export function usePutGeofencingV0CollectionsCollectionNameGeofencesGeofenceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGeofencingV0CollectionsCollectionNameGeofencesGeofenceIdKey()
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
            (typeof client.geofencing.v0.collections)[':CollectionName']['geofences'][':GeofenceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName'].geofences[':GeofenceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeKey(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName/glyphs/:FontStack/:FontUnicodeRange', keyArgs] as const
}

export function useGetMapsV0MapsMapNameGlyphsFontStackFontUnicodeRange<TError = unknown>(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.maps.v0.maps[':MapName'].glyphs[':FontStack'][':FontUnicodeRange'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapsV0MapsMapNameGlyphsFontStackFontUnicodeRange<TError = unknown>(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameGlyphsFontStackFontUnicodeRangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.maps.v0.maps)[':MapName']['glyphs'][':FontStack'][':FontUnicodeRange']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.maps.v0.maps[':MapName'].glyphs[':FontStack'][':FontUnicodeRange'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapsV0MapsMapNameSpritesFileNameKey(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName/sprites/:FileName', keyArgs] as const
}

export function useGetMapsV0MapsMapNameSpritesFileName<TError = unknown>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameSpritesFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.maps.v0.maps[':MapName'].sprites[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapsV0MapsMapNameSpritesFileName<TError = unknown>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameSpritesFileNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.maps.v0.maps)[':MapName']['sprites'][':FileName']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.maps.v0.maps[':MapName'].sprites[':FileName'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapsV0MapsMapNameStyleDescriptorKey(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName/style-descriptor', keyArgs] as const
}

export function useGetMapsV0MapsMapNameStyleDescriptor<TError = unknown>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameStyleDescriptorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.maps.v0.maps[':MapName']['style-descriptor'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapsV0MapsMapNameStyleDescriptor<TError = unknown>(
  args: InferRequestType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameStyleDescriptorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.maps.v0.maps)[':MapName']['style-descriptor']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.maps.v0.maps[':MapName']['style-descriptor'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMapsV0MapsMapNameTilesZXYKey(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['maps', '/maps/v0/maps/:MapName/tiles/:Z/:X/:Y', keyArgs] as const
}

export function useGetMapsV0MapsMapNameTilesZXY<TError = unknown>(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameTilesZXYKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.maps.v0.maps[':MapName'].tiles[':Z'][':X'][':Y'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMapsV0MapsMapNameTilesZXY<TError = unknown>(
  args: InferRequestType<
    (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMapsV0MapsMapNameTilesZXYKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.maps.v0.maps)[':MapName']['tiles'][':Z'][':X'][':Y']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.maps.v0.maps[':MapName'].tiles[':Z'][':X'][':Y'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPlacesV0IndexesIndexNamePlacesPlaceIdKey(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['places', '/places/v0/indexes/:IndexName/places/:PlaceId', keyArgs] as const
}

export function useGetPlacesV0IndexesIndexNamePlacesPlaceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlacesV0IndexesIndexNamePlacesPlaceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.places.v0.indexes[':IndexName'].places[':PlaceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlacesV0IndexesIndexNamePlacesPlaceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlacesV0IndexesIndexNamePlacesPlaceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.places.v0.indexes)[':IndexName']['places'][':PlaceId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.places.v0.indexes[':IndexName'].places[':PlaceId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTrackingV0TrackersTrackerNameListPositionsKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/list-positions', 'POST'] as const
}

export function usePostTrackingV0TrackersTrackerNameListPositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0TrackersTrackerNameListPositionsKey()
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
            (typeof client.tracking.v0.trackers)[':TrackerName']['list-positions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName']['list-positions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGeofencingV0ListCollectionsKey() {
  return ['geofencing', '/geofencing/v0/list-collections', 'POST'] as const
}

export function usePostGeofencingV0ListCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.geofencing.v0)['list-collections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.geofencing.v0)['list-collections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencingV0ListCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.geofencing.v0)['list-collections']['$post']> },
      ) => parseResponse(client.geofencing.v0['list-collections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGeofencingV0CollectionsCollectionNameListGeofencesKey() {
  return [
    'geofencing',
    '/geofencing/v0/collections/:CollectionName/list-geofences',
    'POST',
  ] as const
}

export function usePostGeofencingV0CollectionsCollectionNameListGeofences<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGeofencingV0CollectionsCollectionNameListGeofencesKey()
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
            (typeof client.geofencing.v0.collections)[':CollectionName']['list-geofences']['$post']
          >
        },
      ) =>
        parseResponse(
          client.geofencing.v0.collections[':CollectionName']['list-geofences'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataV0ListKeysKey() {
  return ['metadata', '/metadata/v0/list-keys', 'POST'] as const
}

export function usePostMetadataV0ListKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.metadata.v0)['list-keys']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.metadata.v0)['list-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataV0ListKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.metadata.v0)['list-keys']['$post']> },
      ) => parseResponse(client.metadata.v0['list-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMapsV0ListMapsKey() {
  return ['maps', '/maps/v0/list-maps', 'POST'] as const
}

export function usePostMapsV0ListMaps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.maps.v0)['list-maps']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.maps.v0)['list-maps']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMapsV0ListMapsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.maps.v0)['list-maps']['$post']> },
      ) => parseResponse(client.maps.v0['list-maps'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlacesV0ListIndexesKey() {
  return ['places', '/places/v0/list-indexes', 'POST'] as const
}

export function usePostPlacesV0ListIndexes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.places.v0)['list-indexes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.places.v0)['list-indexes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlacesV0ListIndexesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.places.v0)['list-indexes']['$post']> },
      ) => parseResponse(client.places.v0['list-indexes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRoutesV0ListCalculatorsKey() {
  return ['routes', '/routes/v0/list-calculators', 'POST'] as const
}

export function usePostRoutesV0ListCalculators<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.routes.v0)['list-calculators']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.routes.v0)['list-calculators']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoutesV0ListCalculatorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.routes.v0)['list-calculators']['$post']> },
      ) => parseResponse(client.routes.v0['list-calculators'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']> },
      ) => parseResponse(client.tags[':ResourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTrackingV0TrackersTrackerNameListConsumersKey() {
  return ['tracking', '/tracking/v0/trackers/:TrackerName/list-consumers', 'POST'] as const
}

export function usePostTrackingV0TrackersTrackerNameListConsumers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0TrackersTrackerNameListConsumersKey()
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
            (typeof client.tracking.v0.trackers)[':TrackerName']['list-consumers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tracking.v0.trackers[':TrackerName']['list-consumers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostTrackingV0ListTrackersKey() {
  return ['tracking', '/tracking/v0/list-trackers', 'POST'] as const
}

export function usePostTrackingV0ListTrackers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tracking.v0)['list-trackers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tracking.v0)['list-trackers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTrackingV0ListTrackersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tracking.v0)['list-trackers']['$post']> },
      ) => parseResponse(client.tracking.v0['list-trackers'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPlacesV0IndexesIndexNameSearchPositionKey() {
  return ['places', '/places/v0/indexes/:IndexName/search/position', 'POST'] as const
}

export function usePostPlacesV0IndexesIndexNameSearchPosition<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlacesV0IndexesIndexNameSearchPositionKey()
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
            (typeof client.places.v0.indexes)[':IndexName']['search']['position']['$post']
          >
        },
      ) =>
        parseResponse(
          client.places.v0.indexes[':IndexName'].search.position.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPlacesV0IndexesIndexNameSearchSuggestionsKey() {
  return ['places', '/places/v0/indexes/:IndexName/search/suggestions', 'POST'] as const
}

export function usePostPlacesV0IndexesIndexNameSearchSuggestions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlacesV0IndexesIndexNameSearchSuggestionsKey()
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
            (typeof client.places.v0.indexes)[':IndexName']['search']['suggestions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.places.v0.indexes[':IndexName'].search.suggestions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPlacesV0IndexesIndexNameSearchTextKey() {
  return ['places', '/places/v0/indexes/:IndexName/search/text', 'POST'] as const
}

export function usePostPlacesV0IndexesIndexNameSearchText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlacesV0IndexesIndexNameSearchTextKey()
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
            (typeof client.places.v0.indexes)[':IndexName']['search']['text']['$post']
          >
        },
      ) =>
        parseResponse(client.places.v0.indexes[':IndexName'].search.text.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
