import { createRoute, z } from '@hono/zod-openapi'

const PlusAclentryResourceSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A descriptive name for this entry. Suitable for display.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the entry. For entries of type "person" or "circle", this is the ID of the resource. For other types, this property is not set.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of entry describing to whom access is granted. Possible values are:  \n- "person" - Access to an individual. \n- "circle" - Access to members of a circle. \n- "myCircles" - Access to members of all the person\'s circles. \n- "extendedCircles" - Access to members of all the person\'s circles, plus all of the people in their circles. \n- "domain" - Access to members of the person\'s Google Apps domain. \n- "public" - Access to anyone on the web.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PlusAclentryResource')

const AclSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the access granted, suitable for display.' }),
    items: z
      .array(PlusAclentryResourceSchema)
      .exactOptional()
      .openapi({ description: 'The list of access entries.' }),
    kind: z
      .string()
      .default('plus#acl')
      .exactOptional()
      .openapi({
        description:
          'Identifies this resource as a collection of access controls. Value: "plus#acl".',
      }),
  })
  .openapi({ required: [] })
  .openapi('Acl')

const PlaceSchema = z
  .object({
    address: z
      .object({
        formatted: z
          .string()
          .exactOptional()
          .openapi({ description: 'The formatted address for display.' }),
      })
      .exactOptional()
      .openapi({ description: 'The physical address of the place.', required: [] }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the place.' }),
    id: z.string().exactOptional().openapi({ description: 'The id of the place.' }),
    kind: z
      .string()
      .default('plus#place')
      .exactOptional()
      .openapi({ description: 'Identifies this resource as a place. Value: "plus#place".' }),
    position: z
      .object({
        latitude: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The latitude of this position.' }),
        longitude: z
          .float64()
          .exactOptional()
          .openapi({ description: 'The longitude of this position.' }),
      })
      .exactOptional()
      .openapi({ description: 'The position of the place.', required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Place')

const ActivitySchema = z
  .object({
    access: AclSchema.exactOptional().openapi({
      description: 'Identifies who has access to see this activity.',
    }),
    actor: z
      .object({
        clientSpecificActorInfo: z
          .object({
            youtubeActorInfo: z
              .object({
                channelId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'ID of the YouTube channel owned by the Actor.' }),
              })
              .exactOptional()
              .openapi({ description: 'Actor info specific to YouTube clients.', required: [] }),
          })
          .exactOptional()
          .openapi({ description: 'Actor info specific to particular clients.', required: [] }),
        displayName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of the actor, suitable for display.' }),
        id: z
          .string()
          .exactOptional()
          .openapi({ description: "The ID of the actor's Person resource." }),
        image: z
          .object({
            url: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.",
              }),
          })
          .exactOptional()
          .openapi({ description: 'The image representation of the actor.', required: [] }),
        name: z
          .object({
            familyName: z
              .string()
              .exactOptional()
              .openapi({ description: 'The family name ("last name") of the actor.' }),
            givenName: z
              .string()
              .exactOptional()
              .openapi({ description: 'The given name ("first name") of the actor.' }),
          })
          .exactOptional()
          .openapi({
            description: 'An object representation of the individual components of name.',
            required: [],
          }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: "The link to the actor's Google profile." }),
        verification: z
          .object({
            adHocVerified: z
              .string()
              .exactOptional()
              .openapi({ description: 'Verification for one-time or manual processes.' }),
          })
          .exactOptional()
          .openapi({ description: 'Verification status of actor.', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'The person who performed this activity.', required: [] }),
    address: z
      .string()
      .exactOptional()
      .openapi({ description: 'Street address where this activity occurred.' }),
    annotation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional content added by the person who shared this activity, applicable only when resharing an activity.',
      }),
    crosspostSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this activity is a crosspost from another system, this property specifies the ID of the original activity.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    geocode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Latitude and longitude where this activity occurred. Format is latitude followed by longitude, space separated.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of this activity.' }),
    kind: z
      .string()
      .default('plus#activity')
      .exactOptional()
      .openapi({ description: 'Identifies this resource as an activity. Value: "plus#activity".' }),
    location: PlaceSchema.exactOptional().openapi({
      description: 'The location where this activity occurred.',
    }),
    object: z
      .object({
        actor: z
          .object({
            clientSpecificActorInfo: z
              .object({
                youtubeActorInfo: z
                  .object({
                    channelId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ID of the YouTube channel owned by the Actor.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Actor info specific to YouTube clients.',
                    required: [],
                  }),
              })
              .exactOptional()
              .openapi({ description: 'Actor info specific to particular clients.', required: [] }),
            displayName: z
              .string()
              .exactOptional()
              .openapi({
                description: "The original actor's name, which is suitable for display.",
              }),
            id: z.string().exactOptional().openapi({ description: 'ID of the original actor.' }),
            image: z
              .object({
                url: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'A URL that points to a thumbnail photo of the original actor.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'The image representation of the original actor.',
                required: [],
              }),
            url: z
              .string()
              .exactOptional()
              .openapi({ description: "A link to the original actor's Google profile." }),
            verification: z
              .object({
                adHocVerified: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Verification for one-time or manual processes.' }),
              })
              .exactOptional()
              .openapi({ description: 'Verification status of actor.', required: [] }),
          })
          .exactOptional()
          .openapi({
            description:
              "If this activity's object is itself another activity, such as when a person reshares an activity, this property specifies the original activity's actor.",
            required: [],
          }),
        attachments: z
          .array(
            z
              .object({
                content: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'If the attachment is an article, this property contains a snippet of text from the article. It can also include descriptions for other types.',
                  }),
                displayName: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The title of the attachment, such as a photo caption or an article title.',
                  }),
                embed: z
                  .object({
                    type: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Media type of the link.' }),
                    url: z.string().exactOptional().openapi({ description: 'URL of the link.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'If the attachment is a video, the embeddable link.',
                    required: [],
                  }),
                fullImage: z
                  .object({
                    height: z
                      .uint32()
                      .exactOptional()
                      .openapi({ description: 'The height, in pixels, of the linked resource.' }),
                    type: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Media type of the link.' }),
                    url: z.string().exactOptional().openapi({ description: 'URL of the image.' }),
                    width: z
                      .uint32()
                      .exactOptional()
                      .openapi({ description: 'The width, in pixels, of the linked resource.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'The full image URL for photo attachments.',
                    required: [],
                  }),
                id: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'The ID of the attachment.' }),
                image: z
                  .object({
                    height: z
                      .uint32()
                      .exactOptional()
                      .openapi({ description: 'The height, in pixels, of the linked resource.' }),
                    type: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Media type of the link.' }),
                    url: z.string().exactOptional().openapi({ description: 'Image URL.' }),
                    width: z
                      .uint32()
                      .exactOptional()
                      .openapi({ description: 'The width, in pixels, of the linked resource.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'The preview image for photos or videos.',
                    required: [],
                  }),
                objectType: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'The type of media object. Possible values include, but are not limited to, the following values:  \n- "photo" - A photo. \n- "album" - A photo album. \n- "video" - A video. \n- "article" - An article, specified by a link.',
                  }),
                thumbnails: z
                  .array(
                    z
                      .object({
                        description: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'Potential name of the thumbnail.' }),
                        image: z
                          .object({
                            height: z
                              .uint32()
                              .exactOptional()
                              .openapi({
                                description: 'The height, in pixels, of the linked resource.',
                              }),
                            type: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'Media type of the link.' }),
                            url: z.string().exactOptional().openapi({ description: 'Image url.' }),
                            width: z
                              .uint32()
                              .exactOptional()
                              .openapi({
                                description: 'The width, in pixels, of the linked resource.',
                              }),
                          })
                          .exactOptional()
                          .openapi({ description: 'Image resource.', required: [] }),
                        url: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'URL of the webpage containing the image.' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      'If the attachment is an album, this property is a list of potential additional thumbnails from the album.',
                  }),
                url: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description: 'The link to the attachment, which should be of type text/html.',
                  }),
              })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({ description: 'The media objects attached to this activity.' }),
        content: z
          .string()
          .exactOptional()
          .openapi({ description: 'The HTML-formatted content, which is suitable for display.' }),
        id: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The ID of the object. When resharing an activity, this is the ID of the activity that is being reshared.',
          }),
        objectType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The type of the object. Possible values include, but are not limited to, the following values:  \n- "note" - Textual content. \n- "activity" - A Google+ activity.',
          }),
        originalContent: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The content (text) as provided by the author, which is stored without any HTML formatting. When creating or updating an activity, this value must be supplied as plain text in the request.',
          }),
        plusoners: z
          .object({
            selfLink: z
              .string()
              .exactOptional()
              .openapi({
                description: "The URL for the collection of people who +1'd this activity.",
              }),
            totalItems: z
              .uint32()
              .exactOptional()
              .openapi({ description: "Total number of people who +1'd this activity." }),
          })
          .exactOptional()
          .openapi({ description: "People who +1'd this activity.", required: [] }),
        replies: z
          .object({
            selfLink: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The URL for the collection of comments in reply to this activity.',
              }),
            totalItems: z
              .uint32()
              .exactOptional()
              .openapi({ description: 'Total number of comments on this activity.' }),
          })
          .exactOptional()
          .openapi({ description: 'Comments in reply to this activity.', required: [] }),
        resharers: z
          .object({
            selfLink: z
              .string()
              .exactOptional()
              .openapi({ description: 'The URL for the collection of resharers.' }),
            totalItems: z
              .uint32()
              .exactOptional()
              .openapi({ description: 'Total number of people who reshared this activity.' }),
          })
          .exactOptional()
          .openapi({ description: 'People who reshared this activity.', required: [] }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: 'The URL that points to the linked resource.' }),
      })
      .exactOptional()
      .openapi({ description: 'The object of this activity.', required: [] }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the place where this activity occurred.' }),
    placeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the place where this activity occurred.' }),
    provider: z
      .object({
        title: z.string().exactOptional().openapi({ description: 'Name of the service provider.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The service provider that initially published this activity.',
        required: [],
      }),
    published: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which this activity was initially published. Formatted as an RFC 3339 timestamp.',
      }),
    radius: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Radius, in meters, of the region where this activity occurred, centered at the latitude and longitude identified in geocode.',
      }),
    title: z.string().exactOptional().openapi({ description: 'Title of this activity.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which this activity was last updated. Formatted as an RFC 3339 timestamp.',
      }),
    url: z.string().exactOptional().openapi({ description: 'The link to this activity.' }),
    verb: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This activity\'s verb, which indicates the action that was performed. Possible values include, but are not limited to, the following values:  \n- "post" - Publish content to the stream. \n- "share" - Reshare an activity.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Activity')

const ActivityFeedSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of this collection of activities. Deprecated.' }),
    items: z
      .array(ActivitySchema)
      .exactOptional()
      .openapi({ description: 'The activities in this page of results.' }),
    kind: z
      .string()
      .default('plus#activityFeed')
      .exactOptional()
      .openapi({
        description:
          'Identifies this resource as a collection of activities. Value: "plus#activityFeed".',
      }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the next page of activities.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
    selfLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to this activity resource.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of this collection of activities, which is a truncated portion of the content.',
      }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which this collection of activities was last updated. Formatted as an RFC 3339 timestamp.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ActivityFeed')

const CommentSchema = z
  .object({
    actor: z
      .object({
        clientSpecificActorInfo: z
          .object({
            youtubeActorInfo: z
              .object({
                channelId: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'ID of the YouTube channel owned by the Actor.' }),
              })
              .exactOptional()
              .openapi({ description: 'Actor info specific to YouTube clients.', required: [] }),
          })
          .exactOptional()
          .openapi({ description: 'Actor info specific to particular clients.', required: [] }),
        displayName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name of this actor, suitable for display.' }),
        id: z.string().exactOptional().openapi({ description: 'The ID of the actor.' }),
        image: z
          .object({
            url: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "The URL of the actor's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.",
              }),
          })
          .exactOptional()
          .openapi({ description: 'The image representation of this actor.', required: [] }),
        url: z
          .string()
          .exactOptional()
          .openapi({ description: 'A link to the Person resource for this actor.' }),
        verification: z
          .object({
            adHocVerified: z
              .string()
              .exactOptional()
              .openapi({ description: 'Verification for one-time or manual processes.' }),
          })
          .exactOptional()
          .openapi({ description: 'Verification status of actor.', required: [] }),
      })
      .exactOptional()
      .openapi({ description: 'The person who posted this comment.', required: [] }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of this comment.' }),
    inReplyTo: z
      .array(
        z
          .object({
            id: z.string().exactOptional().openapi({ description: 'The ID of the activity.' }),
            url: z.string().exactOptional().openapi({ description: 'The URL of the activity.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'The activity this comment replied to.' }),
    kind: z
      .string()
      .default('plus#comment')
      .exactOptional()
      .openapi({ description: 'Identifies this resource as a comment. Value: "plus#comment".' }),
    object: z
      .object({
        content: z
          .string()
          .exactOptional()
          .openapi({ description: 'The HTML-formatted content, suitable for display.' }),
        objectType: z
          .string()
          .default('comment')
          .exactOptional()
          .openapi({
            description:
              'The object type of this comment. Possible values are:  \n- "comment" - A comment in reply to an activity.',
          }),
        originalContent: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The content (text) as provided by the author, stored without any HTML formatting. When creating or updating a comment, this value must be supplied as plain text in the request.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'The object of this comment.', required: [] }),
    plusoners: z
      .object({
        totalItems: z
          .uint32()
          .exactOptional()
          .openapi({ description: "Total number of people who +1'd this comment." }),
      })
      .exactOptional()
      .openapi({ description: "People who +1'd this comment.", required: [] }),
    published: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which this comment was initially published. Formatted as an RFC 3339 timestamp.',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link to this comment resource.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which this comment was last updated. Formatted as an RFC 3339 timestamp.',
      }),
    verb: z
      .string()
      .default('post')
      .exactOptional()
      .openapi({
        description:
          'This comment\'s verb, indicating what action was performed. Possible values are:  \n- "post" - Publish content to the stream.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Comment')

const CommentFeedSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of this collection of comments.' }),
    items: z
      .array(CommentSchema)
      .exactOptional()
      .openapi({ description: 'The comments in this page of results.' }),
    kind: z
      .string()
      .default('plus#commentFeed')
      .exactOptional()
      .openapi({
        description:
          'Identifies this resource as a collection of comments. Value: "plus#commentFeed".',
      }),
    nextLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Link to the next page of activities.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of this collection of comments.' }),
    updated: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CommentFeed')

const PersonSchema = z
  .object({
    aboutMe: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short biography for this person.' }),
    ageRange: z
      .object({
        max: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The age range\'s upper bound, if any. Possible values include, but are not limited to, the following:  \n- "17" - for age 17 \n- "20" - for age 20',
          }),
        min: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The age range\'s lower bound, if any. Possible values include, but are not limited to, the following:  \n- "21" - for age 21 \n- "18" - for age 18',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "The age range of the person. Valid ranges are 17 or younger, 18 to 20, and 21 or older. Age is determined from the user's birthday using Western age reckoning.",
        required: [],
      }),
    birthday: z
      .string()
      .exactOptional()
      .openapi({ description: "The person's date of birth, represented as YYYY-MM-DD." }),
    braggingRights: z
      .string()
      .exactOptional()
      .openapi({ description: 'The "bragging rights" line of this person.' }),
    circledByCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'For followers who are visible, the number of people who have added this person or page to a circle.',
      }),
    cover: z
      .object({
        coverInfo: z
          .object({
            leftImageOffset: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'The difference between the left position of the cover image and the actual displayed cover image. Only valid for banner layout.',
              }),
            topImageOffset: z
              .int32()
              .exactOptional()
              .openapi({
                description:
                  'The difference between the top position of the cover image and the actual displayed cover image. Only valid for banner layout.',
              }),
          })
          .exactOptional()
          .openapi({ description: 'Extra information about the cover photo.', required: [] }),
        coverPhoto: z
          .object({
            height: z.int32().exactOptional().openapi({ description: 'The height of the image.' }),
            url: z.string().exactOptional().openapi({ description: 'The URL of the image.' }),
            width: z.int32().exactOptional().openapi({ description: 'The width of the image.' }),
          })
          .exactOptional()
          .openapi({ description: "The person's primary cover image.", required: [] }),
        layout: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The layout of the cover art. Possible values include, but are not limited to, the following values:  \n- "banner" - One large image banner.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'The cover photo content.', required: [] }),
    currentLocation: z
      .string()
      .exactOptional()
      .openapi({ description: '(this field is not currently used)' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of this person, which is suitable for display.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The hosted domain name for the user's Google Apps account. For instance, example.com. The plus.profile.emails.read or email scope is needed to get this domain name.",
      }),
    emails: z
      .array(
        z
          .object({
            type: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The type of address. Possible values include, but are not limited to, the following values:  \n- "account" - Google account email address. \n- "home" - Home email address. \n- "work" - Work email address. \n- "other" - Other.',
              }),
            value: z.string().exactOptional().openapi({ description: 'The email address.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of email addresses that this person has, including their Google account email address, and the public verified email addresses on their Google+ profile. The plus.profile.emails.read scope is needed to retrieve these email addresses, or the email scope can be used to retrieve just the Google account email address.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    gender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The person\'s gender. Possible values include, but are not limited to, the following values:  \n- "male" - Male gender. \n- "female" - Female gender. \n- "other" - Other.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of this person.' }),
    image: z
      .object({
        isDefault: z
          .boolean()
          .exactOptional()
          .openapi({ description: "Whether the person's profile photo is the default one" }),
        url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The URL of the person's profile photo. To resize the image and crop it to a square, append the query string ?sz=x, where x is the dimension in pixels of each side.",
          }),
      })
      .exactOptional()
      .openapi({ description: "The representation of the person's profile photo.", required: [] }),
    isPlusUser: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this user has signed up for Google+.' }),
    kind: z
      .string()
      .default('plus#person')
      .exactOptional()
      .openapi({ description: 'Identifies this resource as a person. Value: "plus#person".' }),
    language: z
      .string()
      .exactOptional()
      .openapi({ description: "The user's preferred language for rendering." }),
    name: z
      .object({
        familyName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The family name (last name) of this person.' }),
        formatted: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The full name of this person, including middle names, suffixes, etc.',
          }),
        givenName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The given name (first name) of this person.' }),
        honorificPrefix: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The honorific prefixes (such as "Dr." or "Mrs.") for this person.',
          }),
        honorificSuffix: z
          .string()
          .exactOptional()
          .openapi({ description: 'The honorific suffixes (such as "Jr.") for this person.' }),
        middleName: z
          .string()
          .exactOptional()
          .openapi({ description: 'The middle name of this person.' }),
      })
      .exactOptional()
      .openapi({
        description: "An object representation of the individual components of a person's name.",
        required: [],
      }),
    nickname: z.string().exactOptional().openapi({ description: 'The nickname of this person.' }),
    objectType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of person within Google+. Possible values include, but are not limited to, the following values:  \n- "person" - represents an actual person. \n- "page" - represents a page.',
      }),
    occupation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The occupation of this person.' }),
    organizations: z
      .array(
        z
          .object({
            department: z
              .string()
              .exactOptional()
              .openapi({ description: 'The department within the organization. Deprecated.' }),
            description: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "A short description of the person's role in this organization. Deprecated.",
              }),
            endDate: z
              .string()
              .exactOptional()
              .openapi({ description: 'The date that the person left this organization.' }),
            location: z
              .string()
              .exactOptional()
              .openapi({ description: 'The location of this organization. Deprecated.' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'The name of the organization.' }),
            primary: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If "true", indicates this organization is the person\'s primary one, which is typically interpreted as the current one.',
              }),
            startDate: z
              .string()
              .exactOptional()
              .openapi({ description: 'The date that the person joined this organization.' }),
            title: z
              .string()
              .exactOptional()
              .openapi({ description: "The person's job title or role within the organization." }),
            type: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The type of organization. Possible values include, but are not limited to, the following values:  \n- "work" - Work. \n- "school" - School.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of current or past organizations with which this person is associated.',
      }),
    placesLived: z
      .array(
        z
          .object({
            primary: z
              .boolean()
              .exactOptional()
              .openapi({
                description:
                  'If "true", this place of residence is this person\'s primary residence.',
              }),
            value: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'A place where this person has lived. For example: "Seattle, WA", "Near Toronto".',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of places where this person has lived.' }),
    plusOneCount: z
      .int32()
      .exactOptional()
      .openapi({ description: "If a Google+ Page, the number of people who have +1'd this page." }),
    relationshipStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The person\'s relationship status. Possible values include, but are not limited to, the following values:  \n- "single" - Person is single. \n- "in_a_relationship" - Person is in a relationship. \n- "engaged" - Person is engaged. \n- "married" - Person is married. \n- "its_complicated" - The relationship is complicated. \n- "open_relationship" - Person is in an open relationship. \n- "widowed" - Person is widowed. \n- "in_domestic_partnership" - Person is in a domestic partnership. \n- "in_civil_union" - Person is in a civil union.',
      }),
    skills: z.string().exactOptional().openapi({ description: "The person's skills." }),
    tagline: z
      .string()
      .exactOptional()
      .openapi({ description: 'The brief description (tagline) of this person.' }),
    url: z.string().exactOptional().openapi({ description: "The URL of this person's profile." }),
    urls: z
      .array(
        z
          .object({
            label: z.string().exactOptional().openapi({ description: 'The label of the URL.' }),
            type: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The type of URL. Possible values include, but are not limited to, the following values:  \n- "otherProfile" - URL for another profile. \n- "contributor" - URL to a site for which this person is a contributor. \n- "website" - URL for this Google+ Page\'s primary website. \n- "other" - Other URL.',
              }),
            value: z.string().exactOptional().openapi({ description: 'The URL value.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({ description: 'A list of URLs for this person.' }),
    verified: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the person or Google+ Page has been verified.' }),
  })
  .openapi({ required: [] })
  .openapi('Person')

const PeopleFeedSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    items: z
      .array(PersonSchema)
      .exactOptional()
      .openapi({
        description:
          'The people in this page of results. Each item includes the id, displayName, image, and url for the person. To retrieve additional profile data, see the people.get method.',
      }),
    kind: z
      .string()
      .default('plus#peopleFeed')
      .exactOptional()
      .openapi({
        description:
          'Identifies this resource as a collection of people. Value: "plus#peopleFeed".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results.',
      }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link to this resource.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'The title of this collection of people.' }),
    totalItems: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The total number of people available in this list. The number of people in a response might be smaller due to paging. This might not be set for all collections.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PeopleFeed')

const AltParamsSchema = z
  .literal('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json'], type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/plus.login':
          'View your basic profile info, including your age range and language',
        'https://www.googleapis.com/auth/plus.me':
          'Associate you with your personal info on Google',
        'https://www.googleapis.com/auth/userinfo.email': 'View your email address',
        'https://www.googleapis.com/auth/userinfo.profile':
          "See your personal info, including any personal info you've made publicly available",
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/plus.login':
          'View your basic profile info, including your age range and language',
        'https://www.googleapis.com/auth/plus.me':
          'Associate you with your personal info on Google',
        'https://www.googleapis.com/auth/userinfo.email': 'View your email address',
        'https://www.googleapis.com/auth/userinfo.profile':
          "See your personal info, including any personal info you've made publicly available",
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getActivitiesRoute = createRoute({
  method: 'get',
  path: '/activities',
  tags: ['activities'],
  description: 'Shut down. See https://developers.google.com/+/api-shutdown for more details.',
  operationId: 'plus.activities.search',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description: 'Full-text search query string.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the preferred language to search with. See search language codes for available values.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(20),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 20, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .enum(['best', 'recent'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Specifies how to order search results.',
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['best', 'recent'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ActivityFeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
  ],
})

export const getActivitiesActivityIdRoute = createRoute({
  method: 'get',
  path: '/activities/{activityId}',
  tags: ['activities'],
  description: 'Shut down. See https://developers.google.com/+/api-shutdown for more details.',
  operationId: 'plus.activities.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      activityId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the activity to get.',
            in: 'path',
            name: 'activityId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ActivitySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
  ],
})

export const getActivitiesActivityIdCommentsRoute = createRoute({
  method: 'get',
  path: '/activities/{activityId}/comments',
  tags: ['comments'],
  description: 'Shut down. See https://developers.google.com/+/api-shutdown for more details.',
  operationId: 'plus.comments.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(500),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of comments to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 500, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortOrder: z
        .enum(['ascending', 'descending'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The order in which to sort the list of comments.',
            in: 'query',
            name: 'sortOrder',
            schema: { enum: ['ascending', 'descending'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      activityId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the activity to get comments for.',
            in: 'path',
            name: 'activityId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentFeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
  ],
})

export const getActivitiesActivityIdPeopleCollectionRoute = createRoute({
  method: 'get',
  path: '/activities/{activityId}/people/{collection}',
  tags: ['people'],
  description: 'Shut down. See https://developers.google.com/+/api-shutdown for more details.',
  operationId: 'plus.people.listByActivity',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      activityId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the activity to get the list of people for.',
            in: 'path',
            name: 'activityId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collection: z
        .enum(['plusoners', 'resharers'])
        .openapi({
          param: {
            description: 'The collection of people to list.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { enum: ['plusoners', 'resharers'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PeopleFeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
  ],
})

export const getCommentsCommentIdRoute = createRoute({
  method: 'get',
  path: '/comments/{commentId}',
  tags: ['comments'],
  description: 'Shut down. See https://developers.google.com/+/api-shutdown for more details.',
  operationId: 'plus.comments.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      commentId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the comment to get.',
            in: 'path',
            name: 'commentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CommentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
  ],
})

export const getPeopleRoute = createRoute({
  method: 'get',
  path: '/people',
  tags: ['people'],
  description: 'Shut down. See https://developers.google.com/+/api-shutdown for more details.',
  operationId: 'plus.people.search',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      query: z
        .string()
        .openapi({
          param: {
            description:
              'Specify a query string for full text search of public text in all profiles.',
            in: 'query',
            name: 'query',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the preferred language to search with. See search language codes for available values.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response. This token can be of any length.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PeopleFeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
  ],
})

export const getPeopleUserIdRoute = createRoute({
  method: 'get',
  path: '/people/{userId}',
  tags: ['people'],
  description:
    "Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.",
  operationId: 'plus.people.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the person to get the profile for. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PersonSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.email'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.email'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/userinfo.profile'],
      Oauth2c: ['https://www.googleapis.com/auth/userinfo.profile'],
    },
  ],
})

export const getPeopleUserIdActivitiesCollectionRoute = createRoute({
  method: 'get',
  path: '/people/{userId}/activities/{collection}',
  tags: ['activities'],
  description: 'Shut down. See https://developers.google.com/+/api-shutdown for more details.',
  operationId: 'plus.activities.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of activities to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the user to get activities for. The special value "me" can be used to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collection: z
        .literal('public')
        .openapi({
          param: {
            description: 'The collection of activities to list.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { enum: ['public'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ActivityFeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
  ],
})

export const getPeopleUserIdPeopleCollectionRoute = createRoute({
  method: 'get',
  path: '/people/{userId}/people/{collection}',
  tags: ['people'],
  description: 'List all of the people in the specified collection.',
  operationId: 'plus.people.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of people to include in the response, which is used for paging. For any response, the actual number returned might be less than the specified maxResults.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .enum(['alphabetical', 'best'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The order to return people in.',
            in: 'query',
            name: 'orderBy',
            schema: { enum: ['alphabetical', 'best'], type: 'string' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      userId: z
        .string()
        .openapi({
          param: {
            description:
              'Get the collection of people for the person identified. Use "me" to indicate the authenticated user.',
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collection: z
        .enum(['connected', 'visible'])
        .openapi({
          param: {
            description: 'The collection of people to list.',
            in: 'path',
            name: 'collection',
            required: true,
            schema: { enum: ['connected', 'visible'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PeopleFeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.login'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/plus.me'],
      Oauth2c: ['https://www.googleapis.com/auth/plus.me'],
    },
  ],
})
