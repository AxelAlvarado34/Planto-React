import './App.css'
import Header from './components/Header'
import { Card } from './components/Card'
import { Review } from './components/Review'
import { Fade } from 'react-awesome-reveal'
import { Footer } from './components/Footer'
import { useCart } from './hooks/useCart'
import { useReview } from './hooks/useReview'


function App() {

  const {
  
    plantsState, 
    cart, 
    setCart, 
    addToCart, 
    incrementAmount, 
    decrementAmount, 
    deleteItem,
    totalCart
  
  } = useCart();

  const {reviewsState} = useReview();

  return (
    <main>

      <div className='bg-app'>
        <Header
          cart={cart}
          setCart={setCart}

          incrementAmount={incrementAmount}
          decrementAmount={decrementAmount}
          deleteItem={deleteItem}
          totalCart={totalCart}
        />
      </div>

      <Fade direction='down' triggerOnce={true}>
        <h2 className='reviews-title' id='products'>Products</h2>
      </Fade>


      <div className='cards' >
        {
          plantsState.map((plant) => {
            return (
              <Card
                key={plant.id}
                plant={plant}

                addToCart={addToCart}
              />
            )
          })
        }
      </div>

      <Fade direction='down' triggerOnce={true}>
        <h2 className='reviews-title' id="reviews">Customer Review</h2>
      </Fade>

      <div className='reviews'>
        {
          reviewsState.map((review) => {
            return (
              <Review key={review.id} review={review} />
            )
          })
        }
      </div>

      <Footer id="footer" />

    </main>
  )
}

export default App
