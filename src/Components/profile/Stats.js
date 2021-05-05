import React from 'react'
import { Label } from './ProfileStyles'

const Stats = ({followers, views, likes}) => (
    <ul>
        <li key={followers}>
            <Label className="label">Followers</Label>
            <span className="quantity">{followers}</span>
        </li>
        <li key={views}>
            <Label className="label">Views</Label>
            <span className="quantity">{views}</span>
        </li>
        <li key={likes}>
            <Label className="label">Likes</Label>
            <span className="quantity">{likes}</span>
        </li>
</ul>
)

export default Stats