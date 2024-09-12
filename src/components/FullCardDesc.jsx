import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function FullCardDesc() {
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState("");
  const { id } = useParams();
  const getProductOne = async () => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductOne();
  }, []);
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-4">
            <img
              src={activeImg ? activeImg : product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-contain mb-4"
            />
            <div className="flex space-x-2">
              {product.images?.map((image, index) => (
                <img
                  onClick={() => setActiveImg(image)}
                  key={index}
                  src={image}
                  alt={product.title}
                  className="w-24 h-24 object-cover rounded-md cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-lg font-semibold mb-4">
              Price: ${product.price?.toFixed(2)}
            </p>
            <p className="text-green-600 font-bold mb-4">
              {product.availabilityStatus}
            </p>
            <p className="text-gray-700 mb-2">Category: {product.category}</p>
            <p className="text-gray-700 mb-2">SKU: {product.sku}</p>
            <p className="text-gray-700 mb-2">
              Dimensions: {product.dimensions?.width} W x{" "}
              {product.dimensions?.height} H x {product.dimensions?.depth} D
            </p>
            <p className="text-gray-700 mb-2">Weight: {product?.weight} lbs</p>
            <p className="text-gray-700 mb-2">
              Minimum Order Quantity: {product.minimumOrderQuantity}
            </p>
            <p className="text-gray-700 mb-4">
              Shipping Info: {product.shippingInformation}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <p className="text-gray-700 mb-2">
            Return Policy: {product.returnPolicy}
          </p>
          <p className="text-gray-700 mb-2">
            Warranty: {product.warrantyInformation}
          </p>
          <p className="text-gray-700 mb-2">Barcode: {product.meta?.barcode}</p>
          <img src={product.meta?.qrCode} alt="QR Code" className="w-24 h-24" />
        </div>

        <div className="p-6 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          {product.reviews?.map((review, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{review.user}</p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500">Rating: {review.rating}/5</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FullCardDesc;
