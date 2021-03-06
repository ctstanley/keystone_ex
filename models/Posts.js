var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Post = new keystone.List('Post', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: '-createdAt'
});
 
Post.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    author: { type: Types.Relationship, ref: 'User' },
    createdAt: { type: Date, default: Date.now },
    publishedAt: Date,
    video: { type: Types.Url },
});
 
Post.defaultColumns = 'title, state|20%, author, publishedAt|15%'
Post.register();