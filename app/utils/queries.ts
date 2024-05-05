export const projectsQuery = groq`
  *[_type == "project"] {
    ...,
    "cover": cover.image.asset->
  }
`

export const archiveQuery = groq`
  *[_type == "archive"][0] {
    ...,
    "items": items[]{
      ...,
      _type == "a11yImage" => {
        "image": image.asset->,
      }
    },
    "cover": cover.image.asset->
  }
`

export const aboutQuery = groq`
  *[_type == "about"][0] {
    ...,
    cover {
      ...,
      _type == "a11yImage" => {
        "image": image.asset->
      }
    }
  }
`

export const homeQuery = groq`
  *[_type == "home"][0] {
    ...
  }
`

export const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    ...,
    "content": content[]{
      ...,
      asset->,
      "image": image.asset->,
      "images": images[]{
        ...,
        _type == "a11yImage" => {
          "image": image.asset->
        }
      }
    },
    "cover": cover.image.asset->
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0] {
    ...,
    profile {
      ...,
      _type == "a11yImage" => {
        "image": image.asset->
      }
    }
  }
`