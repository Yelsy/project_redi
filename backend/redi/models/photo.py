from extensions import data_base
from sqlalchemy import Column, types,func,orm


class Photo(data_base.Model):
    __tablename__ = 'photo'

    id = Column(types.Integer, primary_key=True)
    type_file = Column(types.String(25),nullable=False)
    url_file = Column( types.Text,nullable=False)

    post = orm.relationship('Post', secondary='post_photo', backref='ref_photo')