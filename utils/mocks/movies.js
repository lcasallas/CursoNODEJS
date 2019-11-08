const moviesMock = [
  {
    title: 'Wee Willie Winkie',
    year: 2003,
    cover: 'http://dummyimage.com/206x134.bmp/ff4444/ffffff',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 2024,
    contentRating: 'NC-17',
    source:
      'http://mashable.com/duis.jsp?blandit=nulla&ultrices=tempus&enim=vivamus&lorem=in',
    tag: ['Drama']
  },
  {
    id: 'a9ef53d5-293c-47f2-a05e-674168bf6079',
    title: 'Visioneers',
    year: 2003,
    cover: 'http://dummyimage.com/105x150.jpg/cc0000/ffffff',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 1967,
    contentRating: 'PG',
    source:
      'https://cloudflare.com/vitae/quam/suspendisse.png?nulla=vestibulum&sed=proin&accumsan=eu&felis=mi&ut=nulla&at=ac&dolor=enim&quis=in&odio=tempor&consequat=turpis&varius=nec&integer=euismod&ac=scelerisque&leo=quam&pellentesque=turpis&ultrices=adipiscing&mattis=lorem&odio=vitae&donec=mattis&vitae=nibh&nisi=ligula&nam=nec&ultrices=sem&libero=duis&non=aliquam&mattis=convallis&pulvinar=nunc&nulla=proin&pede=at&ullamcorper=turpis&augue=a&a=pede&suscipit=posuere&nulla=nonummy&elit=integer&ac=non&nulla=velit&sed=donec&vel=diam&enim=neque&sit=vestibulum',
    tag: [
      'Action|Drama|Thriller',
      'Action|Adventure|Sci-Fi',
      'Crime|Drama|Film-Noir|Thriller',
      'Documentary',
      'Comedy|Drama|Romance'
    ]
  },
  {
    id: '06474ac7-79bb-4689-bb41-e6318c7091c3',
    title: 'Mikey and Nicky',
    year: 2007,
    cover: 'http://dummyimage.com/139x227.jpg/cc0000/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 1922,
    contentRating: 'R',
    source:
      'http://cbsnews.com/placerat/ante/nulla/justo/aliquam.jpg?in=nunc&porttitor=purus&pede=phasellus&justo=in&eu=felis&massa=donec&donec=semper&dapibus=sapien&duis=a&at=libero&velit=nam&eu=dui&est=proin&congue=leo&elementum=odio&in=porttitor&hac=id&habitasse=consequat&platea=in&dictumst=consequat&morbi=ut&vestibulum=nulla&velit=sed&id=accumsan&pretium=felis&iaculis=ut&diam=at&erat=dolor&fermentum=quis&justo=odio&nec=consequat&condimentum=varius&neque=integer&sapien=ac&placerat=leo&ante=pellentesque&nulla=ultrices&justo=mattis&aliquam=odio&quis=donec&turpis=vitae&eget=nisi&elit=nam&sodales=ultrices&scelerisque=libero&mauris=non&sit=mattis&amet=pulvinar&eros=nulla&suspendisse=pede&accumsan=ullamcorper&tortor=augue&quis=a&turpis=suscipit&sed=nulla&ante=elit&vivamus=ac&tortor=nulla&duis=sed&mattis=vel&egestas=enim&metus=sit&aenean=amet&fermentum=nunc&donec=viverra&ut=dapibus&mauris=nulla&eget=suscipit&massa=ligula&tempor=in&convallis=lacus&nulla=curabitur&neque=at',
    tag: ['Drama|Thriller', 'Crime|Thriller|Western', 'Drama', 'Drama']
  },
  {
    id: 'e1d552cb-12c0-4c71-b26a-173a217eb716',
    title: 'Live Free or Die Hard',
    year: 1999,
    cover: 'http://dummyimage.com/157x124.bmp/dddddd/000000',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    duration: 1934,
    contentRating: 'PG-13',
    source:
      'http://opensource.org/nulla/pede/ullamcorper.xml?porttitor=morbi&lorem=sem&id=mauris&ligula=laoreet&suspendisse=ut&ornare=rhoncus&consequat=aliquet&lectus=pulvinar&in=sed&est=nisl&risus=nunc&auctor=rhoncus&sed=dui&tristique=vel&in=sem&tempus=sed&sit=sagittis&amet=nam&sem=congue&fusce=risus&consequat=semper&nulla=porta&nisl=volutpat&nunc=quam&nisl=pede&duis=lobortis&bibendum=ligula&felis=sit&sed=amet&interdum=eleifend&venenatis=pede&turpis=libero&enim=quis&blandit=orci&mi=nullam&in=molestie&porttitor=nibh&pede=in&justo=lectus&eu=pellentesque&massa=at&donec=nulla&dapibus=suspendisse&duis=potenti&at=cras&velit=in&eu=purus&est=eu&congue=magna&elementum=vulputate&in=luctus&hac=cum&habitasse=sociis&platea=natoque&dictumst=penatibus&morbi=et&vestibulum=magnis&velit=dis&id=parturient&pretium=montes&iaculis=nascetur&diam=ridiculus&erat=mus&fermentum=vivamus&justo=vestibulum&nec=sagittis&condimentum=sapien&neque=cum&sapien=sociis&placerat=natoque&ante=penatibus&nulla=et&justo=magnis&aliquam=dis&quis=parturient&turpis=montes&eget=nascetur&elit=ridiculus&sodales=mus&scelerisque=etiam&mauris=vel&sit=augue&amet=vestibulum&eros=rutrum&suspendisse=rutrum&accumsan=neque&tortor=aenean&quis=auctor&turpis=gravida',
    tag: ['Drama']
  },
  {
    id: 'b290a144-1692-4e89-bb5e-03670a656796',
    title: 'Ring, The',
    year: 1993,
    cover: 'http://dummyimage.com/244x186.bmp/cc0000/ffffff',
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    duration: 2049,
    contentRating: 'NC-17',
    source:
      'https://t-online.de/maecenas.png?orci=consequat&luctus=morbi&et=a&ultrices=ipsum&posuere=integer&cubilia=a&curae=nibh&mauris=in&viverra=quis&diam=justo&vitae=maecenas&quam=rhoncus&suspendisse=aliquam&potenti=lacus&nullam=morbi&porttitor=quis&lacus=tortor&at=id&turpis=nulla&donec=ultrices&posuere=aliquet&metus=maecenas&vitae=leo&ipsum=odio&aliquam=condimentum&non=id&mauris=luctus&morbi=nec&non=molestie&lectus=sed&aliquam=justo&sit=pellentesque&amet=viverra&diam=pede&in=ac&magna=diam&bibendum=cras&imperdiet=pellentesque&nullam=volutpat&orci=dui&pede=maecenas&venenatis=tristique&non=est&sodales=et&sed=tempus&tincidunt=semper&eu=est&felis=quam&fusce=pharetra&posuere=magna&felis=ac&sed=consequat&lacus=metus&morbi=sapien&sem=ut&mauris=nunc&laoreet=vestibulum&ut=ante',
    tag: ['Drama|Thriller', 'Crime|Drama']
  },
  {
    id: 'daacf1ec-9597-48e1-ae08-a0544abd84c3',
    title:
      'Short Night of the Glass Dolls (La corta notte delle bambole di vetro)',
    year: 2008,
    cover: 'http://dummyimage.com/159x145.bmp/dddddd/000000',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 2037,
    contentRating: 'R',
    source:
      'https://naver.com/ut/erat/curabitur/gravida.js?ut=nisl&odio=duis&cras=ac&mi=nibh&pede=fusce&malesuada=lacus&in=purus&imperdiet=aliquet&et=at&commodo=feugiat&vulputate=non&justo=pretium&in=quis&blandit=lectus&ultrices=suspendisse&enim=potenti&lorem=in&ipsum=eleifend&dolor=quam&sit=a&amet=odio&consectetuer=in&adipiscing=hac&elit=habitasse&proin=platea&interdum=dictumst&mauris=maecenas&non=ut&ligula=massa&pellentesque=quis&ultrices=augue&phasellus=luctus&id=tincidunt&sapien=nulla&in=mollis&sapien=molestie&iaculis=lorem&congue=quisque&vivamus=ut&metus=erat&arcu=curabitur&adipiscing=gravida&molestie=nisi&hendrerit=at&at=nibh&vulputate=in&vitae=hac&nisl=habitasse&aenean=platea&lectus=dictumst&pellentesque=aliquam&eget=augue&nunc=quam&donec=sollicitudin&quis=vitae&orci=consectetuer&eget=eget&orci=rutrum&vehicula=at&condimentum=lorem&curabitur=integer&in=tincidunt&libero=ante&ut=vel&massa=ipsum&volutpat=praesent&convallis=blandit&morbi=lacinia&odio=erat&odio=vestibulum&elementum=sed&eu=magna&interdum=at&eu=nunc&tincidunt=commodo&in=placerat&leo=praesent&maecenas=blandit&pulvinar=nam&lobortis=nulla&est=integer&phasellus=pede',
    tag: ['Drama|Mystery', 'Comedy|Fantasy|Horror', 'Drama|Fantasy', 'Romance']
  },
  {
    id: 'c128cc56-33f0-403a-a489-568b8c5d6b3f',
    title: 'Yes Men Fix the World, The',
    year: 1985,
    cover: 'http://dummyimage.com/146x201.jpg/5fa2dd/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 2009,
    contentRating: 'PG-13',
    source:
      'http://unicef.org/non/ligula/pellentesque/ultrices/phasellus.jsp?turpis=sapien&enim=dignissim&blandit=vestibulum&mi=vestibulum&in=ante&porttitor=ipsum&pede=primis&justo=in&eu=faucibus&massa=orci&donec=luctus&dapibus=et&duis=ultrices&at=posuere&velit=cubilia&eu=curae&est=nulla&congue=dapibus&elementum=dolor&in=vel&hac=est&habitasse=donec&platea=odio&dictumst=justo&morbi=sollicitudin&vestibulum=ut&velit=suscipit&id=a&pretium=feugiat&iaculis=et&diam=eros&erat=vestibulum&fermentum=ac&justo=est&nec=lacinia&condimentum=nisi',
    tag: ['Crime|Drama|Romance', 'Drama', 'Drama|War', 'Drama|Musical']
  },
  {
    id: '1f9fd149-e505-4aec-b18a-a8d34421afd8',
    title: "There's Always A Woman",
    year: 1992,
    cover: 'http://dummyimage.com/233x122.bmp/dddddd/000000',
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    duration: 1894,
    contentRating: 'PG',
    source:
      'https://seesaa.net/nonummy/maecenas.json?semper=aliquam&sapien=augue&a=quam&libero=sollicitudin&nam=vitae&dui=consectetuer&proin=eget&leo=rutrum&odio=at&porttitor=lorem',
    tag: [
      'Children|Musical',
      'Comedy|Romance',
      'Crime',
      'Action|Comedy|Crime|Thriller'
    ]
  },
  {
    id: 'c3a24e43-c77e-4ba0-93c0-941512473296',
    title: 'Eight Legged Freaks',
    year: 1999,
    cover: 'http://dummyimage.com/223x216.jpg/5fa2dd/ffffff',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1954,
    contentRating: 'R',
    source:
      'https://meetup.com/sagittis/sapien/cum/sociis/natoque/penatibus.html?amet=augue&sem=a&fusce=suscipit&consequat=nulla&nulla=elit&nisl=ac&nunc=nulla&nisl=sed&duis=vel&bibendum=enim&felis=sit&sed=amet&interdum=nunc&venenatis=viverra&turpis=dapibus&enim=nulla&blandit=suscipit&mi=ligula&in=in&porttitor=lacus&pede=curabitur&justo=at&eu=ipsum&massa=ac&donec=tellus&dapibus=semper&duis=interdum&at=mauris&velit=ullamcorper&eu=purus&est=sit&congue=amet&elementum=nulla&in=quisque&hac=arcu&habitasse=libero&platea=rutrum&dictumst=ac&morbi=lobortis',
    tag: ['Comedy|Drama|Romance']
  },
  {
    id: 'ea326cd8-1fdc-40f5-aecc-b435f94fb53b',
    title: 'Cry-Baby',
    year: 2002,
    cover: 'http://dummyimage.com/240x128.jpg/dddddd/000000',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    duration: 1982,
    contentRating: 'G',
    source:
      'https://ibm.com/pede/posuere/nonummy/integer.js?nec=nunc&dui=proin&luctus=at&rutrum=turpis&nulla=a&tellus=pede&in=posuere&sagittis=nonummy&dui=integer',
    tag: ['Drama']
  }
];

module.exports = { moviesMock };
