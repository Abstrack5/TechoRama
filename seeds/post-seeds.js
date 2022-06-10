const sequelize = require('../config/connection');
const { Post } = require('../models');

const seedPostTable = [
    {
      title: 'Donec posuere metus vitae ipsum.',
      post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
      user_id: 1
    },
    {
      title: 'Morbi non quam nec dui luctus rutrum.',
      post_url: 'https://nasa.gov/donec.json',
      user_id: 1
    },
    {
      title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
      post_url: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
      user_id: 2
    },
    {
      title: 'Nunc purus.',
      post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
      user_id: 2
    },
    {
      title: 'Pellentesque eget nunc.',
      post_url: 'http://google.ca/nam/nulla/integer.aspx',
      user_id: 3
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      post_url: 'https://stanford.edu/consequat.png',
      user_id: 3
    },
    {
      title: 'In hac habitasse platea dictumst.',
      post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
      user_id: 4
    },
    {
      title: 'Morbi non quam nec dui luctus rutrum.',
      post_url: 'http://ucla.edu/consequat/nulla.html',
      user_id: 4
    },
    {
      title: 'Duis ac nibh.',
      post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
      user_id: 5
    },
    {
      title: 'Curabitur at ipsum ac tellus semper interdum.',
      post_url: 'https://reverbnation.com/ligula/sit.jpg',
      user_id: 5
    },
    {
      title: 'In hac habitasse platea dictumst.',
      post_url: 'http://china.com.cn/lectus/vestibulum.json',
      user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(seedPostTable);

module.exports = seedPosts;